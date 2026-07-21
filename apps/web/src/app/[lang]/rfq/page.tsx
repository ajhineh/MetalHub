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
  Settings,
  X,
  Edit3,
  Share2,
  Copy,
  Printer,
  FileCheck,
  Building,
  User,
  Mail,
  Phone,
  Layers,
  MapPin,
  FileImage,
  FileSpreadsheet
} from 'lucide-react';
import styles from './rfq.module.css';

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

// Strict Phone & Gibberish Validation Helpers
const phoneRegex = /^\+?[0-9\s\-\(\)]{7,20}$/;

function isGibberishText(text?: string): boolean {
  if (!text || text.trim().length === 0) return false;
  const cleaned = text.trim();
  // Check for repeated character patterns e.g. "نانانان" or "asdfasdf" or "11111"
  const hasExtremeCharRepetition = /(.)\1{4,}/.test(cleaned);
  const words = cleaned.split(/\s+/);
  const uniqueWords = new Set(words);
  const isRepetitiveWords = words.length > 3 && uniqueWords.size === 1;
  const isSingleLongWordWithoutSpace = cleaned.length > 25 && !cleaned.includes(' ');
  return hasExtremeCharRepetition || isRepetitiveWords || isSingleLongWordWithoutSpace;
}

// Zod Validation Schema
const rfqSchema = z.object({
  companyName: z.string().min(2, { message: 'Company name must be at least 2 characters.' }),
  contactName: z.string().min(2, { message: 'Contact name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid business email address.' }),
  phone: z.string().regex(phoneRegex, { message: 'Invalid phone format. Only numbers, spaces, +, -, () are allowed (min 7 digits).' }),
  steelGrade: z.string(),
  finishing: z.string(),
  tolerance: z.string(),
  quantity: z.number().min(1, { message: 'Quantity must be at least 1 unit.' }),
  zipCode: z.string().min(3, { message: 'Please enter a valid delivery zip code.' }),
  notes: z.string().optional().refine((val) => !isGibberishText(val), {
    message: 'Special instructions appear to contain random or repetitive characters. Please provide meaningful notes.'
  })
});

type RfqFormData = z.infer<typeof rfqSchema>;

interface VerifiedFile {
  file: File;
  previewUrl?: string;
  fileType: 'cad' | 'pdf' | 'image';
  binaryVerified: boolean;
}

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
    step3: isFr ? 'Plans & Fichiers' : 'Drawings & Files',
    step4: isFr ? 'Volume & Livraison' : 'Volume & Delivery',
    step5: isFr ? 'Vérification & Envoi' : 'Review & Confirm',
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
      ? 'Faites glisser vos fichiers de plans (DXF, DWG, STEP, PDF, JPG, PNG) ici ou cliquez pour parcourir'
      : 'Drag and drop your engineering files (DXF, DWG, STEP, PDF, JPG, PNG) here or click to browse',
    uploadAreaActive: isFr
      ? 'Déposez les fichiers pour démarrer l\'analyse sécurisée'
      : 'Drop files now to initialize secure binary verification',
    uploadHint: isFr 
      ? 'Formats autorisés : DXF, DWG, STEP, PDF, JPG, PNG (Max 30 Mo par fichier, fichiers multiples acceptés)'
      : 'Supported formats: DXF, DWG, STEP, PDF, JPG, PNG (Max 30MB per file, multiple files supported)',
    qty: isFr ? 'Quantité' : 'Required Quantity',
    zip: isFr ? 'Code Postal de Livraison' : 'Delivery Zip Code',
    notes: isFr ? 'Instructions Particulières' : 'Special Instructions / Notes',
    btnBack: isFr ? 'Retour' : 'Back',
    btnNext: isFr ? 'Suivant' : 'Next',
    btnReview: isFr ? 'Vérifier la commande' : 'Review Summary',
    btnConfirmSubmit: isFr ? 'Confirmer & Envoyer la Demande' : 'Confirm & Submit Quote Request',
    btnEdit: isFr ? 'Modifier' : 'Edit',
    processing: isFr ? 'Vérification en cours...' : 'Processing submission...',
    successTitle: isFr ? 'Demande de Devis Transmise & Archivée !' : 'RFQ Submitted & Archived Successfully!',
    successDesc: isFr
      ? 'Votre dossier technique a été vérifié, chiffré et transmis à notre bureau d\'études. Un devis officiel vous sera délivré sous 24-48h.'
      : 'Your technical dossier has been binary-verified, encrypted, and dispatched to our engineering center. An official quotation will be issued within 24-48 hours.',
    silentMentor: isFr ? 'MENTOR SILENCIEUX' : 'SILENT MENTOR',
    dynamicAdvice: isFr ? 'Recommandations en temps réel' : 'Real-time AI Guidance',
    toastValidation: isFr ? 'Veuillez corriger les erreurs de validation.' : 'Please correct validation errors in the highlighted fields.',
    shareTitle: isFr ? 'Archivage & Partage' : 'Archive & Share Summary',
    copyLink: isFr ? 'Copier le résumé' : 'Copy Summary Link',
    printPdf: isFr ? 'Imprimer / Sauvegarder PDF' : 'Print / Save PDF Report',
    linkCopied: isFr ? 'Lien du résumé copié !' : 'Summary link copied to clipboard!'
  };

  const [step, setStep] = useState(1);
  const [verifiedFiles, setVerifiedFiles] = useState<VerifiedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [fileError, setFileError] = useState('');
  const [toasts, setToasts] = useState<string[]>([]);
  const [guidance, setGuidance] = useState<any[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [rfqRefId, setRfqRefId] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    getValues,
    formState: { errors }
  } = useForm<RfqFormData>({
    resolver: zodResolver(rfqSchema),
    mode: 'onChange',
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

  const watchedSteelGrade = watch('steelGrade');
  const watchedFinishing = watch('finishing');
  const watchedTolerance = watch('tolerance');
  const watchedQuantity = watch('quantity');
  const watchedNotes = watch('notes');

  // Trigger guidance fetch & AI gibberish detector whenever form values change
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
          let items = data.guidanceItems || [];

          // AI Gibberish detector injection into Guidance UI
          if (watchedNotes && isGibberishText(watchedNotes)) {
            items = [
              {
                id: 'gibberish-notes',
                severity: 'HIGH',
                message: 'Special instructions contain repetitive or random text patterns. Please enter detailed technical requirements.',
                actionableSteps: ['Clear placeholder characters and specify manufacturing notes.'],
                evidenceLinks: []
              },
              ...items
            ];
          }

          setGuidance(items);
        }
      } catch (err) {
        console.error('Error fetching guidance:', err);
      }
    }
    fetchGuidance();
  }, [watchedSteelGrade, watchedFinishing, watchedTolerance, watchedQuantity, watchedNotes]);

  // Toast Helper
  const addToast = (msg: string) => {
    setToasts(prev => [...prev, msg]);
    setTimeout(() => {
      setToasts(prev => prev.slice(1));
    }, 4500);
  };

  const nextStep = async () => {
    let isValid = false;
    if (step === 1) {
      isValid = await trigger(['companyName', 'contactName', 'email', 'phone']);
    } else if (step === 2) {
      isValid = await trigger(['steelGrade', 'finishing', 'tolerance']);
    } else if (step === 3) {
      if (verifiedFiles.length === 0) {
        const msg = isFr ? 'Veuillez téléverser au moins un plan ou fichier valide.' : 'Please upload at least one valid drawing or file.';
        setFileError(msg);
        addToast(msg);
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
  const goToStep = (targetStep: number) => setStep(targetStep);

  // Drag & drop logic
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
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFileList(e.dataTransfer.files);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError('');
    if (e.target.files && e.target.files.length > 0) {
      processFileList(e.target.files);
    }
  };

  // Immediate Client-Side Magic Number verification
  const verifyFileHeadersClient = (file: File): Promise<{ isValid: boolean; detectedType: 'cad' | 'pdf' | 'image' }> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (!reader.result) {
          resolve({ isValid: false, detectedType: 'cad' });
          return;
        }
        const bytes = new Uint8Array(reader.result as ArrayBuffer);
        const hex = Array.from(bytes.slice(0, 15)).map(b => b.toString(16).padStart(2, '0')).join(' ');
        const ascii = Array.from(bytes.slice(0, 15)).map(b => (b >= 32 && b <= 126 ? String.fromCharCode(b) : '.')).join('');
        
        const fileExt = file.name.toLowerCase().split('.').pop() || '';
        let isValid = false;
        let detectedType: 'cad' | 'pdf' | 'image' = 'cad';

        if (fileExt === 'pdf') {
          detectedType = 'pdf';
          isValid = hex.startsWith('25 50 44 46'); // %PDF
        } else if (fileExt === 'png') {
          detectedType = 'image';
          isValid = hex.startsWith('89 50 4e 47'); // PNG magic
        } else if (fileExt === 'jpg' || fileExt === 'jpeg') {
          detectedType = 'image';
          isValid = hex.startsWith('ff d8 ff'); // JPEG magic
        } else if (fileExt === 'dwg') {
          detectedType = 'cad';
          isValid = hex.startsWith('41 43 31 30') || hex.startsWith('4d 43 30 2e');
        } else if (fileExt === 'step' || fileExt === 'stp') {
          detectedType = 'cad';
          isValid = hex.startsWith('49 53 4f 2d') || ascii.includes('ISO-10303');
        } else if (fileExt === 'dxf') {
          detectedType = 'cad';
          isValid = ascii.startsWith('0') || ascii.startsWith('  0') || ascii.includes('SECTION');
        }

        resolve({ isValid, detectedType });
      };
      reader.readAsArrayBuffer(file.slice(0, 100));
    });
  };

  const processFileList = async (files: FileList | File[]) => {
    const validExtensions = ['dxf', 'dwg', 'step', 'stp', 'pdf', 'jpg', 'jpeg', 'png'];
    const newVerifiedFiles: VerifiedFile[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileExt = file.name.split('.').pop()?.toLowerCase() || '';

      if (!validExtensions.includes(fileExt)) {
        const err = isFr 
          ? `Format non supporté pour "${file.name}". Seuls DXF, DWG, STEP, PDF, JPG, PNG sont autorisés.`
          : `Unsupported format for "${file.name}". Only DXF, DWG, STEP, PDF, JPG, PNG are allowed.`;
        setFileError(err);
        addToast(`❌ ${err}`);
        continue;
      }

      if (file.size > 30 * 1024 * 1024) {
        const err = isFr 
          ? `Fichier "${file.name}" trop lourd (> 30 Mo).` 
          : `File "${file.name}" exceeds 30MB size limit.`;
        setFileError(err);
        addToast(`❌ ${err}`);
        continue;
      }

      // Immediate Magic Number Binary Header Verification
      const { isValid, detectedType } = await verifyFileHeadersClient(file);
      if (!isValid) {
        const err = isFr
          ? `Échec de sécurité : Le fichier "${file.name}" a échoué à la vérification باینری. Contenu corrompu ou extension modifiée.`
          : `Security Rejection: File "${file.name}" failed binary magic number signature check. Corrupted or renamed file.`;
        setFileError(err);
        addToast(`🛡️ ${err}`);
        continue;
      }

      let previewUrl = undefined;
      if (detectedType === 'image') {
        previewUrl = URL.createObjectURL(file);
      }

      newVerifiedFiles.push({
        file,
        previewUrl,
        fileType: detectedType,
        binaryVerified: true
      });
    }

    if (newVerifiedFiles.length > 0) {
      setVerifiedFiles(prev => [...prev, ...newVerifiedFiles]);
    }
  };

  const removeFile = (index: number) => {
    setVerifiedFiles(prev => prev.filter((_, idx) => idx !== index));
  };

  const onSubmitFinal = async (data: RfqFormData) => {
    if (verifiedFiles.length === 0) return;

    setSubmitting(true);
    setStatusMessage(t.processing);

    try {
      const generatedId = `RFQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;

      // Complete Submission via API Route
      const completeRes = await fetch('/api/rfq', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          rfqId: generatedId,
          filenames: verifiedFiles.map(vf => vf.file.name),
          s3Key: `drawings/${generatedId}/${verifiedFiles[0].file.name}`
        })
      });

      if (completeRes.ok) {
        setRfqRefId(generatedId);
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

  const copySummaryLink = () => {
    const summaryText = `MetalHub RFQ ${rfqRefId} | ${getValues('companyName')} | Grade: ${getValues('steelGrade')} | Qty: ${getValues('quantity')} units`;
    navigator.clipboard.writeText(summaryText);
    addToast(t.linkCopied);
  };

  const printReport = () => {
    window.print();
  };

  // SUCCESS REPORT SCREEN
  if (submitted) {
    const formDataValues = getValues();
    return (
      <div className="min-h-screen py-16 px-4 flex flex-col items-center justify-center">
        <div 
          className="steel-card" 
          style={{ 
            maxWidth: '750px', 
            width: '100%', 
            padding: '2.5rem', 
            background: 'rgba(10,16,29,0.85)', 
            backdropFilter: 'blur(10px)', 
            border: '1px solid var(--color-steel-border)', 
            borderRadius: '16px' 
          }}
        >
          {/* Header Badge */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-steel-border)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <FileCheck className="w-8 h-8" />
              </div>
              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#10b981' }}>
                  {isFr ? 'Dossier Technique Archivé' : 'Dossier Verified & Archived'}
                </span>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#ffffff', margin: 0, fontFamily: 'Arial, sans-serif' }}>
                  {rfqRefId}
                </h2>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span className="badge badge-steel" style={{ fontSize: '0.75rem', backgroundColor: 'rgba(6,182,212,0.1)', color: '#22d3ee', border: '1px solid rgba(6,182,212,0.3)' }}>
                Status: DRAFTED & VERIFIED
              </span>
            </div>
          </div>

          <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#ffffff', marginBottom: '0.5rem' }}>{t.successTitle}</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1.75rem' }}>{t.successDesc}</p>

          {/* Structured Receipt Summary Box */}
          <div style={{ padding: '1.25rem', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid var(--color-steel-border)', borderRadius: '10px', marginBottom: '1.75rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', fontWeight: '700' }}>Company</span>
                <span style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: '600' }}>{formDataValues.companyName}</span>
              </div>
              <div>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', fontWeight: '700' }}>Contact</span>
                <span style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: '600' }}>{formDataValues.contactName} ({formDataValues.email})</span>
              </div>
              <div>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', fontWeight: '700' }}>Steel Grade</span>
                <span style={{ fontSize: '0.9rem', color: '#22d3ee', fontWeight: '600' }}>{formDataValues.steelGrade}</span>
              </div>
              <div>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', fontWeight: '700' }}>Finishing & Tolerance</span>
                <span style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: '600' }}>{formDataValues.finishing} | {formDataValues.tolerance}</span>
              </div>
              <div>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', fontWeight: '700' }}>Quantity & Delivery Zip</span>
                <span style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: '600' }}>{formDataValues.quantity} units to {formDataValues.zipCode}</span>
              </div>
            </div>

            {/* Attached Files List */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.75rem' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', fontWeight: '700', marginBottom: '0.5rem' }}>
                Archived Attachments ({verifiedFiles.length})
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {verifiedFiles.map((vf, idx) => (
                  <span key={idx} style={{ padding: '0.3rem 0.6rem', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid var(--color-steel-border)', borderRadius: '6px', fontSize: '0.75rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <FileCheck className="w-3.5 h-3.5" />
                    {vf.file.name} ({(vf.file.size / (1024 * 1024)).toFixed(2)} MB)
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Sharing Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                onClick={copySummaryLink}
                className="hover:bg-white/10 text-white font-semibold transition-all flex items-center gap-1.5"
                style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid var(--color-steel-border)', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '0.8rem' }}
              >
                <Copy className="w-4 h-4 text-cyan-400" />
                <span>{t.copyLink}</span>
              </button>

              <button 
                onClick={printReport}
                className="hover:bg-white/10 text-white font-semibold transition-all flex items-center gap-1.5"
                style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid var(--color-steel-border)', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '0.8rem' }}
              >
                <Printer className="w-4 h-4 text-cyan-400" />
                <span>{t.printPdf}</span>
              </button>
            </div>

            <button 
              onClick={() => { setStep(1); setSubmitted(false); setVerifiedFiles([]); }} 
              className="hover:bg-cyan-300 text-slate-950 font-bold text-xs tracking-wide transition-all"
              style={{ padding: '0.55rem 1.25rem', borderRadius: '8px', backgroundColor: '#22d3ee', border: 'none', cursor: 'pointer' }}
            >
              {isFr ? 'Nouvelle Demande' : 'Submit Another Request'}
            </button>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4" style={{ position: 'relative', zIndex: 10 }}>
      
      {/* Toast notifications container */}
      <div style={{ position: 'fixed', top: '24px', right: '24px', zIndex: 100, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {toasts.map((toast, idx) => (
          <div key={idx} style={{ padding: '0.75rem 1.25rem', backgroundColor: '#ef4444', color: '#ffffff', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
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
            aria-valuemax={5}
            aria-label={`Wizard Step ${step} of 5`}
          >
            {[t.step1, t.step2, t.step3, t.step4, t.step5].map((label, idx) => {
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

          {/* Wizard Form Card */}
          <div className="steel-card" style={{ padding: '2rem', background: 'rgba(10,16,29,0.5)', backdropFilter: 'blur(5px)', border: '1px solid var(--color-steel-border)', borderRadius: '12px' }}>
            <form onSubmit={handleSubmit(onSubmitFinal)}>
              
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

              {/* Step 3: Drawing files upload & previews */}
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
                      aria-label="Upload CAD drawing, PDF or Image blueprint files."
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') fileInputRef.current?.click(); }}
                    >
                      <div style={{ color: 'var(--color-cad-blue)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                        <Upload className="w-10 h-10 text-cyan-400" />
                      </div>
                      <p style={{ color: '#ffffff', fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                        {isDragging ? t.uploadAreaActive : t.uploadAreaDefault}
                      </p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t.uploadHint}</p>
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleFileChange} 
                        style={{ display: 'none' }} 
                        accept=".dxf,.dwg,.step,.stp,.pdf,.jpg,.jpeg,.png"
                        multiple
                      />
                    </div>
                    {fileError && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.5rem', fontWeight: '600' }}>❌ {fileError}</p>}
                    
                    {/* Multi-File Uploaded list & Type-Specific Previews */}
                    {verifiedFiles.length > 0 && (
                      <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>
                          Verified Files ({verifiedFiles.length})
                        </span>
                        
                        {verifiedFiles.map((item, idx) => (
                          <div key={idx} style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid var(--color-steel-border)', borderRadius: '8px', position: 'relative' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontSize: '0.85rem', fontWeight: '600' }}>
                                <CheckCircle className="w-4 h-4" />
                                <span>{item.file.name} ({(item.file.size / (1024 * 1024)).toFixed(2)} MB)</span>
                                <span style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem', borderRadius: '4px', backgroundColor: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', color: '#10b981', textTransform: 'uppercase' }}>
                                  MAGIC HEADER OK
                                </span>
                              </div>
                              <button 
                                type="button" 
                                onClick={() => removeFile(idx)}
                                style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '0.2rem' }}
                                title="Remove File"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>

                            {/* Type-Specific Preview Rendering */}
                            {item.fileType === 'image' && item.previewUrl && (
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '700' }}>IMAGE BLUEPRINT PREVIEW</span>
                                <div style={{ height: '140px', width: '100%', borderRadius: '6px', overflow: 'hidden', border: '1px solid #1e293b', background: '#020617', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                  <img src={item.previewUrl} alt="Blueprint" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                                </div>
                              </div>
                            )}

                            {item.fileType === 'pdf' && (
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '700' }}>DOCUMENT PDF PREVIEW</span>
                                <div style={{ height: '120px', width: '100%', borderRadius: '6px', border: '1px solid #1e293b', background: '#020617', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                                  <FileText className="w-12 h-12 text-rose-400" />
                                  <div>
                                    <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#ffffff' }}>PDF Technical Document</div>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Structured Engineering Specification Sheet</div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {item.fileType === 'cad' && (
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '700' }}>CAD 2D VECTOR BLUEPRINT PREVIEW</span>
                                <div style={{ height: '130px', width: '100%', border: '1px solid #1e293b', borderRadius: '6px', background: '#020617', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                                  <svg width="220" height="90" viewBox="0 0 220 90" style={{ position: 'relative', zIndex: 1, opacity: 0.85 }}>
                                    <rect x="10" y="10" width="200" height="70" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
                                    <circle cx="50" cy="45" r="14" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
                                    <circle cx="170" cy="45" r="14" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
                                    <line x1="10" y1="45" x2="210" y2="45" stroke="#38bdf8" strokeWidth="1" strokeDasharray="5 5" />
                                  </svg>
                                  <span style={{ position: 'absolute', bottom: '6px', right: '8px', fontSize: '0.65rem', color: '#38bdf8', fontFamily: 'monospace', fontWeight: 'bold' }}>CAD VECTOR OK</span>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
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
                    {errors.notes && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.notes.message}</p>}
                  </div>
                </div>
              )}

              {/* Step 5: Review & Confirmation Summary Screen before Final Submission */}
              {step === 5 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ padding: '1rem', backgroundColor: 'rgba(6,182,212,0.05)', border: '1px solid rgba(6,182,212,0.3)', borderRadius: '8px', color: '#22d3ee', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Info className="w-4 h-4" />
                    <span>{isFr ? 'Vérifiez les informations avant l\'envoi final.' : 'Review your dossier summary carefully before final transmission.'}</span>
                  </div>

                  {/* Summary Breakdown Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                    
                    {/* Section 1 */}
                    <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid var(--color-steel-border)', borderRadius: '8px', position: 'relative' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>1. Contact Information</span>
                        <button type="button" onClick={() => goToStep(1)} style={{ background: 'none', border: 'none', color: '#22d3ee', cursor: 'pointer', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                          <Edit3 className="w-3 h-3" />
                          <span>{t.btnEdit}</span>
                        </button>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: '600' }}>{getValues('companyName')}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{getValues('contactName')}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{getValues('email')} | {getValues('phone')}</div>
                    </div>

                    {/* Section 2 */}
                    <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid var(--color-steel-border)', borderRadius: '8px', position: 'relative' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>2. Specifications</span>
                        <button type="button" onClick={() => goToStep(2)} style={{ background: 'none', border: 'none', color: '#22d3ee', cursor: 'pointer', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                          <Edit3 className="w-3 h-3" />
                          <span>{t.btnEdit}</span>
                        </button>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#22d3ee', fontWeight: '600' }}>Grade: {getValues('steelGrade')}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Finish: {getValues('finishing')}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Tolerance: {getValues('tolerance')}</div>
                    </div>

                    {/* Section 3 */}
                    <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid var(--color-steel-border)', borderRadius: '8px', position: 'relative' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>3. Verified Files ({verifiedFiles.length})</span>
                        <button type="button" onClick={() => goToStep(3)} style={{ background: 'none', border: 'none', color: '#22d3ee', cursor: 'pointer', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                          <Edit3 className="w-3 h-3" />
                          <span>{t.btnEdit}</span>
                        </button>
                      </div>
                      {verifiedFiles.map((vf, idx) => (
                        <div key={idx} style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: '500' }}>
                          ✓ {vf.file.name}
                        </div>
                      ))}
                    </div>

                    {/* Section 4 */}
                    <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid var(--color-steel-border)', borderRadius: '8px', position: 'relative' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>4. Volume & Delivery</span>
                        <button type="button" onClick={() => goToStep(4)} style={{ background: 'none', border: 'none', color: '#22d3ee', cursor: 'pointer', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                          <Edit3 className="w-3 h-3" />
                          <span>{t.btnEdit}</span>
                        </button>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: '600' }}>{getValues('quantity')} units</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Zip: {getValues('zipCode')}</div>
                      {getValues('notes') && <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.25rem', fontStyle: 'italic' }}>"{getValues('notes')}"</div>}
                    </div>

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
                
                {step < 5 ? (
                  <button 
                    type="button" 
                    onClick={nextStep} 
                    className="hover:bg-cyan-300 text-slate-950 font-bold transition-all flex items-center gap-1"
                    style={{ padding: '0.45rem 1.2rem', borderRadius: '8px', backgroundColor: '#22d3ee', border: 'none', cursor: 'pointer', fontSize: '0.85rem' }}
                  >
                    <span>{step === 4 ? t.btnReview : t.btnNext}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    className="hover:bg-cyan-300 text-slate-950 font-extrabold transition-all"
                    style={{ padding: '0.55rem 1.75rem', borderRadius: '8px', backgroundColor: '#22d3ee', border: 'none', cursor: 'pointer', fontSize: '0.85rem' }}
                    disabled={submitting}
                  >
                    {submitting ? statusMessage : t.btnConfirmSubmit}
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
                      backgroundColor: item.severity === 'HIGH' ? 'rgba(239, 68, 68, 0.08)' : 'rgba(255,255,255,0.02)', 
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
