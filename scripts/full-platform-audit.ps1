$ScriptPath = "C:\Users\James\Development\platform\scripts\full-platform-audit.ps1"

$Tokens = $null
$ParseErrors = $null

[System.Management.Automation.Language.Parser]::ParseFile(
    $ScriptPath,
    [ref]$Tokens,
    [ref]$ParseErrors
) | Out-Null

if ($ParseErrors.Count -eq 0) {
    Write-Host "PASS: Script syntax is valid." -ForegroundColor Green
}

if ($ParseErrors.Count -gt 0) {
    $ParseErrors |
        Select-Object `
            @{Name="Line"; Expression={$_.Extent.StartLineNumber}},
            @{Name="Column"; Expression={$_.Extent.StartColumnNumber}},
            Message |
        Format-Table -AutoSize -Wrap
}