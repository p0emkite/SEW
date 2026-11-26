from pathlib import Path
import hashlib, json
root = Path(__file__).resolve().parent.parent
m = json.loads((root / 'deployment.json').read_text(encoding='utf-8'))
data = b''.join((root / p['path']).read_bytes() for p in m['parts'])
assert len(data) == m['bytes'], 'size mismatch'
assert hashlib.sha256(data).hexdigest() == m['sha256'], 'checksum mismatch'
out = root / 'build' / 'index.html'
out.parent.mkdir(exist_ok=True)
out.write_bytes(data)
print(out)
