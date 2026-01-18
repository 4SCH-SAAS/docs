Param(
  [string] = "docs/**/*.md"
)

function Get-UrlsFromFile {
  param([string])
   = Get-Content -Raw -LiteralPath 
   = '(https?://[^\s\)\]\">]+)'
   = [System.Text.RegularExpressions.Regex]::Matches(, )
   | ForEach-Object { .Groups[1].Value }
}

 = Get-ChildItem -Recurse -File 
 = @()
foreach ( in ) {  += Get-UrlsFromFile -Path .FullName }
 =  | Where-Object {  -notmatch '^https?://localhost' } | Sort-Object -Unique

 = @();  = @();  = @()
foreach ( in ) {
  try {
     = Invoke-WebRequest -Uri  -Method Head -TimeoutSec 10 -ErrorAction Stop
    if (.StatusCode -ge 200 -and .StatusCode -lt 400) {
       += " []"
    } else {
       += " []"
    }
  } catch {
    # Some servers block HEAD; try GET with small timeout
    try {
       = Invoke-WebRequest -Uri  -Method Get -TimeoutSec 10 -ErrorAction Stop
      if (.StatusCode -ge 200 -and .StatusCode -lt 400) {
         += " [|GET]"
      } else {
         += " [|GET]"
      }
    } catch {
       += " [no response]"
    }
  }
}

"Total URLs: 0" | Write-Output
"OK: 0" | Write-Output
"Warnings (no response): 0" | Write-Output
"Failures: 0" | Write-Output

if (.Count -gt 0) {
  "Failures list:" | Write-Output
   | ForEach-Object { " - " | Write-Output }
}
if (.Count -gt 0) {
  "Warnings list:" | Write-Output
   | ForEach-Object { " - " | Write-Output }
}
