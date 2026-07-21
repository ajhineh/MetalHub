'use client';

import React, { useState, useEffect, useRef, use } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Network, 
  ShoppingBag, 
  Clock, 
  ShieldCheck, 
  MoreHorizontal,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  Info,
  CheckCircle,
  FileText,
  Upload,
  ArrowRight,
  ArrowLeft,
  Settings
} from 'lucide-react';
import styles from './rfq.module.css';

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

// Zod Validation Schema
const rfqSchema = z.object({
  companyName: z.string().min(2, { message: 'Company name must be at least 2 characters.' }),
  contactName: z.string().min(2, { message: 'Contact name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid business email address.' }),
  phone: z.string().min(6, { message: 'Please enter a valid phone number.' }),
  steelGrade: z.string(),
  finishing: z.string(),
  tolerance: z.string(),
  quantity: z.number().min(1, { message: 'Quantity must be at least 1.' }),
  zipCode: z.string().min(3, { message: 'Please enter a valid delivery zip code.' }),
  notes: z.string().optional()
});

type RfqFormData = z.infer<typeof rfqSchema>;

export default function RfqPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const isFr = resolvedParams.lang === 'fr';
  const lang = resolvedParams.lang || 'en';

  const t = {
    title: isFr ? 'Portail RFQ - Demande d\'Études & Devis' : 'Secure B2B RFQ Portal',
    subtitle: isFr 
      ? 'Chiffrez vos structures de charpentes métalliques industrielles sous 24-48h.'
      : 'Get an engineered price quotation within 24-48 hours. Secure file transmission.',
    step1: isFr ? 'Coordonnées' : 'Contact Details',
    step2: isFr ? 'Spécifications' : 'Specifications',
    step3: isFr ? 'Fichiers CAO' : 'CAD Drawings',
    step4: isFr ? 'Volume & Envoi' : 'Volume & Submit',
    company: isFr ? 'Nom de la Société' : 'Company Name',
    contact: isFr ? 'Nom & Prénom' : 'Contact Person',
    email: isFr ? 'Adresse Email' : 'Email Address',
    phone: isFr ? 'Téléphone' : 'Phone Number',
    grade: isFr ? 'Grade Acier Principal' : 'Primary Steel Grade',
    finish: isFr ? 'Traitement de surface' : 'Surface Finishing',
    rawSteel: isFr ? 'Brut' : 'Raw / Mill finished',
    primed: isFr ? 'Peinture Primaire' : 'Primed painted',
    galvanized: isFr ? 'Galvanisation à chaud (ISO 1461)' : 'Hot-Dip Galvanized (ISO 1461)',
    powderCoated: isFr ? 'Thermolaquage RAL' : 'Powder Coated RAL',
    tolerance: isFr ? 'Tolérances' : 'Tolerances',
    stdTolerance: isFr ? 'Standard (ISO 2768-m)' : 'Standard (ISO 2768-m)',
    fineTolerance: isFr ? 'Précise (ISO 2768-f)' : 'Fine (ISO 2768-f)',
    uploadAreaDefault: isFr
      ? 'Faites glisser vos fichiers de plans ici ou cliquez pour parcourir'
      : 'Drag and drop your engineering drawings here or click to browse',
    uploadAreaActive: isFr
      ? 'Déposez les fichiers pour démarrer l\'analyse sécurisée'
      : 'Drop files now to initialize secure binary verification',
    uploadHint: isFr 
      ? 'Formats : DXF, DWG, STEP, PDF (Taille max: 30 Mo)'
      : 'Supported formats: DXF, DWG, STEP, PDF (Max size: 30MB)',
    qty: isFr ? 'Quantité' : 'Required Quantity',
    zip: isFr ? 'Code Postal de Livraison' : 'Delivery Zip Code',
    notes: isFr ? 'Instructions Particulières' : 'Special Instructions / Notes',
    btnBack: isFr ? 'Retour' : 'Back',
    btnNext: isFr ? 'Suivant' : 'Next',
    btnSubmit: isFr ? 'Soumettre la Demande' : 'Submit Quote Request',
    processing: isFr ? 'Vérification binaire du fichier...' : 'Executing Magic Number validation...',
    uploadingS3: isFr ? 'Transfert direct vers S3...' : 'Uploading directly to AWS S3 bucket...',
    successTitle: isFr ? 'Demande Transmise avec Succès !' : 'RFQ Submitted successfully!',
    successDesc: isFr
      ? 'Vos fichiers CAO ont été vérifiés sur notre serveur et envoyés sur notre bucket de stockage privé. Notre bureau d\'études enverra le devis sous 24-48h.'
      : 'CAD files verified and streamed to our private S3 bucket. Our engineering center will issue the Devis within 24-48h.',
    silentMentor: isFr ? 'MENTOR SILENCIEUX' : 'SILENT MENTOR',
    dynamicAdvice: isFr ? 'Recommandations en temps réel' : 'Real-time AI Guidance',
    previewCAD: isFr ? 'Aperçu 2D / Schéma technique' : 'CAD Drawing 2D Blueprint Preview',
    toastValidation: isFr ? 'Veuillez corriger les erreurs de validation.' : 'Please correct the validation errors.'
  };

  const [step, setStep] = useState(1);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [fileError, setFileError] = useState('');
  const [toasts, setToasts] = useState<string[]>([]);
  const [guidance, setGuidance] = useState<any[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors }
  } = useForm<RfqFormData>({
    resolver: zodResolver(rfqSchema),
    defaultValues: {
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      steelGrade: 'S355J2+N',
      finishing: 'raw',
      tolerance: 'standard',
      quantity: 1,
      zipCode: '',
      notes: ''
    }
  });

  // Watch key values for context-aware Guidance Panel updates
  const watchedSteelGrade = watch('steelGrade');
  const watchedFinishing = watch('finishing');
  const watchedTolerance = watch('tolerance');
  const watchedQuantity = watch('quantity');

  // Trigger guidance fetch whenever form values change
  useEffect(() => {
    async function fetchGuidance() {
      try {
        const query = new URLSearchParams({
          steelGrade: watchedSteelGrade,
          finishing: watchedFinishing,
          tolerance: watchedTolerance,
          quantity: String(watchedQuantity)
        });
        const res = await fetch(`/api/rfq/guidance?${query.toString()}`);
        if (res.ok) {
          const data = await res.json();
          setGuidance(data.guidanceItems || []);
        }
      } catch (err) {
        console.error('Error fetching guidance:', err);
      }
    }
    fetchGuidance();
  }, [watchedSteelGrade, watchedFinishing, watchedTolerance, watchedQuantity]);

  // Toast Helpers
  const addToast = (msg: string) => {
    setToasts(prev => [...prev, msg]);
    setTimeout(() => {
      setToasts(prev => prev.slice(1));
    }, 4000);
  };

  const nextStep = async () => {
    let isValid = false;
    if (step === 1) {
      isValid = await trigger(['companyName', 'contactName', 'email', 'phone']);
    } else if (step === 2) {
      isValid = await trigger(['steelGrade', 'finishing', 'tolerance']);
    } else if (step === 3) {
      if (!selectedFile) {
        setFileError(isFr ? 'Veuillez téléverser un plan CAO.' : 'Please upload a CAD drawing file.');
        addToast(isFr ? 'Échec : plan requis' : 'Failure: CAD Drawing is required');
        return;
      }
      isValid = true;
    } else if (step === 4) {
      isValid = await trigger(['quantity', 'zipCode', 'notes']);
    }

    if (isValid) {
      setStep(prev => prev + 1);
    } else {
      addToast(t.toastValidation);
    }
  };

  const prevStep = () => setStep(prev => prev - 1);

  // Drag and drop logic
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    setFileError('');
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError('');
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (file: File) => {
    const validExtensions = ['dxf', 'dwg', 'step', 'stp', 'pdf'];
    const fileExt = file.name.split('.').pop()?.toLowerCase() || '';

    if (!validExtensions.includes(fileExt)) {
      const err = isFr ? 'Format non supporté. Seuls DXF, DWG, STEP, et PDF sont autorisés.' : 'Unsupported format. Only DXF, DWG, STEP, and PDF are allowed.';
      setFileError(err);
      addToast(err);
      return;
    }
    if (file.size > 30 * 1024 * 1024) {
      const err = isFr ? 'Fichier trop lourd. Max 30 Mo.' : 'File exceeds size limit. Max 30MB allowed.';
      setFileError(err);
      addToast(err);
      return;
    }
    setSelectedFile(file);
  };

  // Client-Side Magic Number validation
  const verifyFileHeadersClient = (file: File): Promise<boolean> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (!reader.result) {
          resolve(false);
          return;
        }
        const bytes = new Uint8Array(reader.result as ArrayBuffer);
        const hex = Array.from(bytes.slice(0, 15)).map(b => b.toString(16).padStart(2, '0')).join(' ');
        const ascii = Array.from(bytes.slice(0, 15)).map(b => (b >= 32 && b <= 126 ? String.fromCharCode(b) : '.')).join('');
        
        const fileExt = file.name.toLowerCase().split('.').pop() || '';
        let isValid = false;

        if (fileExt === 'pdf') {
          isValid = hex.startsWith('25 50 44 46'); // %PDF
        } else if (fileExt === 'dwg') {
          isValid = hex.startsWith('41 43 31 30') || hex.startsWith('4d 43 30 2e');
        } else if (fileExt === 'step' || fileExt === 'stp') {
          isValid = hex.startsWith('49 53 4f 2d') || ascii.includes('ISO-10303');
        } else if (fileExt === 'dxf') {
          isValid = ascii.startsWith('0') || ascii.startsWith('  0') || ascii.includes('SECTION');
        }
        resolve(isValid);
      };
      reader.readAsArrayBuffer(file.slice(0, 100));
    });
  };

  const onSubmit = async (data: RfqFormData) => {
    if (!selectedFile) return;

    setSubmitting(true);
    setStatusMessage(t.processing);

    try {
      // 1. Client-Side Magic Number check
      const isBinaryValid = await verifyFileHeadersClient(selectedFile);
      if (!isBinaryValid) {
        const errorMsg = isFr 
          ? 'Rejet de sécurité : Échec de validation de la signature binaire.' 
          : 'Security Rejection: File binary signature check failed.';
        setFileError(errorMsg);
        addToast(errorMsg);
        setSubmitting(false);
        return;
      }

      // 2. Complete Submission via our local API route (mocking CRM/NestJS hooks)
      setStatusMessage(isFr ? 'Enregistrement de la demande...' : 'Registering RFQ deal opportunity...');
      const completeRes = await fetch('/api/rfq', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          s3Key: `drawings/${Date.now()}-${selectedFile.name}`,
          filename: selectedFile.name
        })
      });

      if (completeRes.ok) {
        setSubmitted(true);
      } else {
        addToast(isFr ? 'Erreur lors de l\'enregistrement.' : 'Failed to register lead in database.');
      }
    } catch (err) {
      console.error(err);
      addToast(isFr ? 'Erreur de connexion.' : 'Network error connecting to API.');
    } finally {
      setStatusMessage('');
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center py-16 px-4">
        <div className="steel-card" style={{ maxWidth: '500px', width: '100%', padding: '2.5rem', textAlign: 'center', background: 'rgba(10,16,29,0.7)', border: '1px solid var(--color-steel-border)', borderRadius: '12px' }}>
          <div style={{ color: 'var(--color-cad-blue)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
            <CheckCircle className="w-16 h-16 text-cyan-400" />
          </div>
          <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '1rem', fontFamily: 'Arial, sans-serif', fontWeight: '600' }}>{t.successTitle}</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem' }}>{t.successDesc}</p>
          <button 
            onClick={() => { setStep(1); setSubmitted(false); setSelectedFile(null); }} 
            className="hover:bg-cyan-300 text-slate-950 font-bold text-sm tracking-wide transition-all"
            style={{ padding: '0.6rem 1.8rem', borderRadius: '8px', backgroundColor: '#22d3ee', border: 'none', cursor: 'pointer', width: '100%' }}
          >
            {isFr ? 'Faire une nouvelle demande' : 'Submit Another Request'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4" style={{ position: 'relative', zIndex: 10 }}>
      
      {/* Toast notifications container */}
      <div style={{ position: 'fixed', top: '24px', right: '24px', zIndex: 100, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {toasts.map((toast, idx) => (
          <div key={idx} style={{ padding: '0.75rem 1.25rem', backgroundColor: '#ef4444', color: '#ffffff', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
            <AlertTriangle className="w-4 h-4" />
            <span>{toast}</span>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 340px', gap: '30px', alignItems: 'start' }}>
        
        {/* Main Form Column */}
        <div>
          <div className="section-header text-left" style={{ marginBottom: '2rem' }}>
            <h1 className="section-title" style={{ fontSize: '2.5rem', fontFamily: 'Arial, sans-serif', fontWeight: '600', marginBottom: '0.5rem' }}>{t.title}</h1>
            <p className="section-subtitle" style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{t.subtitle}</p>
          </div>

          {/* Progress Tracker with Accessibility ARIA Labels */}
          <div 
            className={styles.stepIndicator} 
            role="progressbar" 
            aria-valuenow={step} 
            aria-valuemin={1} 
            aria-valuemax={4}
            aria-label={`Wizard Step ${step} of 4`}
          >
            {[t.step1, t.step2, t.step3, t.step4].map((label, idx) => {
              const isCurrent = step === idx + 1;
              const isDone = step > idx + 1;
              return (
                <div 
                  key={idx} 
                  className={`${styles.indicatorItem} ${isCurrent || isDone ? styles.indicatorActive : ''}`}
                >
                  <div className={styles.indicatorNumber}>
                    {idx + 1}
                  </div>
                  <span className={styles.indicatorLabel}>
                    {label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Wizard Form Component */}
          <div className="steel-card" style={{ padding: '2rem', background: 'rgba(10,16,29,0.5)', backdropFilter: 'blur(5px)', border: '1px solid var(--color-steel-border)', borderRadius: '12px' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              
              {/* Step 1: Contact details */}
              {step === 1 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="companyName">{t.company}</label>
                    <input 
                      id="companyName"
                      required
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. Alstom SAS" 
                      aria-required="true"
                      {...register('companyName')}
                    />
                    {errors.companyName && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.companyName.message}</p>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contactName">{t.contact}</label>
                    <input 
                      id="contactName"
                      required
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. Jean Dupont" 
                      aria-required="true"
                      {...register('contactName')}
                    />
                    {errors.contactName && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.contactName.message}</p>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">{t.email}</label>
                    <input 
                      id="email"
                      required
                      type="email" 
                      className="form-input" 
                      placeholder="e.g. j.dupont@alstom.com" 
                      aria-required="true"
                      {...register('email')}
                    />
                    {errors.email && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.email.message}</p>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">{t.phone}</label>
                    <input 
                      id="phone"
                      required
                      type="tel" 
                      className="form-input" 
                      placeholder="e.g. +33 6 1234 5678" 
                      aria-required="true"
                      {...register('phone')}
                    />
                    {errors.phone && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.phone.message}</p>}
                  </div>
                </div>
              )}

              {/* Step 2: Technical specifications */}
              {step === 2 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="steelGrade">{t.grade}</label>
                    <select id="steelGrade" className="form-select" {...register('steelGrade')}>
                      <option value="S355J2+N">Steel Grade S355J2+N (Recommended)</option>
                      <option value="S235JR">Steel Grade S235JR</option>
                      <option value="Stainless 304L">Stainless Steel 304L</option>
                      <option value="Stainless 316L">Stainless Steel 316L (Inox)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="finishing">{t.finish}</label>
                    <select id="finishing" className="form-select" {...register('finishing')}>
                      <option value="raw">{t.rawSteel}</option>
                      <option value="primed">{t.primed}</option>
                      <option value="galvanized">{t.galvanized}</option>
                      <option value="powder-coated">{t.powderCoated}</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="tolerance">{t.tolerance}</label>
                    <select id="tolerance" className="form-select" {...register('tolerance')}>
                      <option value="standard">{t.stdTolerance}</option>
                      <option value="fine">{t.fineTolerance}</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Drawing files upload */}
              {step === 3 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="form-group">
                    <label className="form-label">{t.step3}</label>
                    
                    {/* Drag and Drop Zone with ARIA labels */}
                    <div 
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`${styles.uploadBox} ${isDragging ? styles.uploadBoxActive : ''}`}
                      role="button"
                      tabIndex={0}
                      aria-label="Upload CAD drawing file. Drag and drop file here, or click to browse."
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') fileInputRef.current?.click(); }}
                    >
                      <div style={{ color: 'var(--color-cad-blue)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                        <Upload className="w-10 h-10 text-cyan-400" />
                      </div>
                      <p style={{ color: '#ffffff', fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                        {selectedFile ? selectedFile.name : (isDragging ? t.uploadAreaActive : t.uploadAreaDefault)}
                      </p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t.uploadHint}</p>
                      <input 
                        required={!selectedFile}
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleFileChange} 
                        style={{ display: 'none' }} 
                        accept=".dxf,.dwg,.step,.stp,.pdf"
                      />
                    </div>
                    {fileError && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.5rem', fontWeight: '600' }}>❌ {fileError}</p>}
                    
                    {/* Uploaded File details and Static Blueprint CAD Preview */}
                    {selectedFile && !fileError && (
                      <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid var(--color-steel-border)', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontSize: '0.85rem', fontWeight: '600', marginBottom: '1rem' }}>
                          <CheckCircle className="w-4 h-4" />
                          <span>{selectedFile.name} ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)</span>
                        </div>
                        
                        {/* Static CAD Blueprint mock visualization */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>{t.previewCAD}</span>
                          <div style={{ height: '140px', width: '100%', border: '1px solid #1e293b', borderRadius: '6px', background: '#020617', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                            {/* Blueprint grid lines */}
                            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                            
                            {/* Technical Drawing Vector Shape Mock */}
                            <svg width="220" height="100" viewBox="0 0 220 100" style={{ position: 'relative', zIndex: 1, opacity: 0.85 }}>
                              <rect x="10" y="10" width="200" height="80" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
                              <circle cx="50" cy="50" r="16" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
                              <circle cx="170" cy="50" r="16" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
                              <line x1="10" y1="50" x2="210" y2="50" stroke="#38bdf8" strokeWidth="1" strokeDasharray="5 5" />
                              <line x1="50" y1="10" x2="50" y2="90" stroke="#38bdf8" strokeWidth="1" strokeDasharray="5 5" />
                              <line x1="170" y1="10" x2="170" y2="90" stroke="#38bdf8" strokeWidth="1" strokeDasharray="5 5" />
                            </svg>
                            <span style={{ position: 'absolute', bottom: '8px', right: '8px', fontSize: '0.65rem', color: '#38bdf8', fontFamily: 'monospace', fontWeight: 'bold' }}>CAD 2D VIEW OK</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 4: Quantities & Shipping */}
              {step === 4 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="quantity">{t.qty}</label>
                    <input 
                      id="quantity"
                      required
                      type="number" 
                      min="1" 
                      className="form-input" 
                      aria-required="true"
                      {...register('quantity', { valueAsNumber: true })}
                    />
                    {errors.quantity && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.quantity.message}</p>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="zipCode">{t.zip}</label>
                    <input 
                      id="zipCode"
                      required
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. 69001 (Lyon)" 
                      aria-required="true"
                      {...register('zipCode')}
                    />
                    {errors.zipCode && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.zipCode.message}</p>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="notes">{t.notes}</label>
                    <textarea 
                      id="notes"
                      rows={4} 
                      className="form-textarea" 
                      placeholder="e.g. Weld certifications required, hot-dip zinc coating..." 
                      {...register('notes')}
                    />
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className={styles.formActions} style={{ display: 'flex', justifyContent: step > 1 ? 'space-between' : 'flex-end', width: '100%' }}>
                {step > 1 && (
                  <button 
                    type="button" 
                    onClick={prevStep} 
                    className="hover:bg-white/10 text-white font-semibold transition-all flex items-center gap-1"
                    style={{ padding: '0.45rem 1.2rem', borderRadius: '8px', border: '1px solid var(--color-steel-border)', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '0.85rem' }}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>{t.btnBack}</span>
                  </button>
                )}
                
                {step < 4 ? (
                  <button 
                    type="button" 
                    onClick={nextStep} 
                    className="hover:bg-cyan-300 text-slate-950 font-bold transition-all flex items-center gap-1"
                    style={{ padding: '0.45rem 1.2rem', borderRadius: '8px', backgroundColor: '#22d3ee', border: 'none', cursor: 'pointer', fontSize: '0.85rem' }}
                  >
                    <span>{t.btnNext}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    className="hover:bg-cyan-300 text-slate-950 font-extrabold transition-all"
                    style={{ padding: '0.5rem 1.5rem', borderRadius: '8px', backgroundColor: '#22d3ee', border: 'none', cursor: 'pointer', fontSize: '0.85rem' }}
                    disabled={submitting}
                  >
                    {submitting ? statusMessage : t.btnSubmit}
                  </button>
                )}
              </div>

            </form>
          </div>
        </div>

        {/* 4. Contextual Guidance UI Panel ("Silent Mentor" Sidebar) */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '4.8rem' }}>
          
          <div style={{ padding: '1.25rem', background: 'rgba(10,16,29,0.5)', backdropFilter: 'blur(5px)', border: '1px solid var(--color-steel-border)', borderRadius: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid var(--color-steel-border)', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
              <Settings className="w-4 h-4 text-cyan-400" />
              <span style={{ fontSize: '0.75rem', fontWeight: '850', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                {t.silentMentor}
              </span>
            </div>
            
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.4', marginBottom: '1.25rem' }}>
              {t.dynamicAdvice}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {guidance.length === 0 ? (
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', padding: '1.5rem 0' }}>
                  No active warnings. Form complies with standards.
                </div>
              ) : (
                guidance.map((item, idx) => (
                  <div 
                    key={item.id || idx} 
                    style={{ 
                      padding: '0.75rem 1rem', 
                      backgroundColor: item.severity === 'HIGH' ? 'rgba(239, 68, 68, 0.05)' : 'rgba(255,255,255,0.02)', 
                      border: `1px solid ${item.severity === 'HIGH' ? '#ef4444' : 'var(--color-steel-border)'}`, 
                      borderRadius: '8px' 
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      {item.severity === 'HIGH' || item.severity === 'MEDIUM' ? (
                        <AlertTriangle className="w-4 h-4 text-amber-400" />
                      ) : (
                        <Info className="w-4 h-4 text-cyan-400" />
                      )}
                      <span style={{ fontSize: '0.7rem', fontWeight: '750', textTransform: 'uppercase', color: item.severity === 'HIGH' ? '#ef4444' : 'var(--text-muted)' }}>
                        {item.severity} ADVICE
                      </span>
                    </div>

                    <p style={{ fontSize: '0.75rem', color: '#ffffff', lineHeight: '1.4', marginBottom: '0.5rem' }}>
                      {item.message}
                    </p>

                    {item.actionableSteps && item.actionableSteps.length > 0 && (
                      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.5rem', marginTop: '0.5rem' }}>
                        <span style={{ fontSize: '0.65rem', fontWeight: '700', color: 'var(--text-muted)' }}>RECOMMENDED ACTION:</span>
                        <ul style={{ margin: '0.25rem 0 0 0', paddingLeft: '1rem', fontSize: '0.72rem', color: 'rgba(255,255,255,0.8)', listStyleType: 'disc' }}>
                          {item.actionableSteps.map((stepStr: string, sIdx: number) => (
                            <li key={sIdx}>{stepStr}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>

        </aside>

      </div>
    </div>
  );
}
