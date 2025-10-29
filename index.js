// SAGE-NFM API - Sistema Neuropsicológico de Mapeamento Funcional
// Desenvolvido por Petrucio Barros para autogestão TDAH

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: "🧠 SAGE-NFM API - Sistema Neuropsicológico de Mapeamento Funcional",
    version: "1.0.0",
    status: "🚀 Ativo",
    author: "Petrucio Barros",
    apis: {
      auth: "✅ Implementada",
      mps: "✅ Implementada", 
      checkins: "✅ Implementada",
      analytics: "✅ Implementada",
      dashboard: "✅ Implementada",
      reports: "🔄 Em desenvolvimento",
      notifications: "🔄 Em desenvolvimento"
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🧠 SAGE-NFM API rodando na porta ${PORT}`);
});

module.exports = app;
