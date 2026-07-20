import re
import json

files = [
    'd:\\AI-Project\\Business\\docs\\md\\books\\Architecture Consolidation of Volume 1 to 9.md',
    'd:\\AI-Project\\Business\\docs\\md\\books\\Volume I – Vision & Philosophy.md',
    'd:\\AI-Project\\Business\\docs\\md\\books\\Volume X — Industrial Evolution Architecture.md',
    'd:\\AI-Project\\Business\\docs\\md\\books\\Volume XI - Execution Roadmap.md'
]

results = []

for file in files:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            lines = f.readlines()
            
        for i, line in enumerate(lines):
            if re.search(r'(?i)(principle|constraint|anti-principle|anti-pattern)', line):
                # get some context
                start = max(0, i - 2)
                end = min(len(lines), i + 3)
                context = "".join(lines[start:end])
                results.append({
                    "file": file.split("\\")[-1],
                    "line": i+1,
                    "match": line.strip(),
                    "context": context.strip()
                })
    except Exception as e:
        print(f"Error reading {file}: {e}")

with open('d:\\AI-Project\\Business\\extract_results.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2)

print("Extraction complete. Found", len(results), "matches.")
