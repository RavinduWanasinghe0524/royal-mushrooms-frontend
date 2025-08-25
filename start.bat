@echo off
echo Starting Royal Mushrooms Application...
echo.

echo 🚀 Starting Backend Server...
start "Backend" cmd /k "cd /d %~dp0backend && npm start"

echo.
echo ⏳ Waiting for backend to initialize...
timeout /t 3 /nobreak >nul

echo.
echo 🌐 Starting Frontend Application...
start "Frontend" cmd /k "cd /d %~dp0 && npm run dev"

echo.
echo ✅ Both servers are starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Press any key to exit...
pause >nul
