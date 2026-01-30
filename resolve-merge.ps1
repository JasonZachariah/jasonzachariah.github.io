# Resolve merge conflicts: keep our version for dist/ and node_modules/
# Run in PowerShell from repo root: .\resolve-merge.ps1

# Dist: keep our (current branch) version for all conflicted files
git checkout --ours dist/404.html dist/about.html dist/archive.html dist/handbook.html dist/index.html dist/octobud.html dist/wip.html dist/wizParser.html dist/wizedos.html
git add dist/

# Node_modules: keep our version (Windows)
git checkout --ours node_modules/.package-lock.json
# DU (deleted by us): stage working tree so Windows binaries are kept
git add node_modules/
git add node_modules/@esbuild/win32-x64/
git add "node_modules/@parcel/watcher-win32-x64/"
git add "node_modules/@parcel/watcher/node_modules/@parcel/watcher-win32-x64/"
git add "node_modules/@tailwindcss/oxide-win32-x64-msvc/"
git add "node_modules/@tailwindcss/vite/node_modules/@tailwindcss/oxide-win32-x64-msvc/"
git add "node_modules/@tailwindcss/vite/node_modules/lightningcss-win32-x64-msvc/"
git add "node_modules/lightningcss-win32-x64-msvc/"
git add "node_modules/rollup/node_modules/@rollup/rollup-win32-x64-msvc/"

git status
Write-Host ""
Write-Host "If no 'Unmerged paths' remain, run:"
Write-Host '  git commit -m "Merge origin/main, keep dist and node_modules (ours)"'
Write-Host "  npm run deploy"
