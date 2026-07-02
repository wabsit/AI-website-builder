document.getElementById("generateBtn").addEventListener("click", function () {
  const prompt = document.getElementById("prompt").value;
  const preview = document.getElementById("previewFrame");

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body{
          font-family:Arial,sans-serif;
          padding:40px;
          text-align:center;
          background:#f5f5f5;
        }
        h1{
          color:#2563eb;
        }
      </style>
    </head>
    <body>
      <h1>AI Generated Website</h1>
      <p>${prompt}</p>
    </body>
    </html>
  `;

  preview.srcdoc = html;
});
