# Multiply — Plataforma Global de Treinamento

Sistema web para gestão e visualização da rede global de programas de treinamento missionário.

## Estrutura de arquivos

```
multiply-platform/
├── index.html          ← Formulário de afiliação (7 idiomas)
├── dashboard.html      ← Painel analítico (filtros, mapa, gráficos)
├── css/
│   └── styles.css      ← Design system (Navy/Gold, responsivo)
├── js/
│   ├── data.js         ← Banco de dados (37 programas pré-carregados)
│   ├── form.js         ← Lógica do formulário + i18n
│   ├── dashboard.js    ← Gráficos, mapa, filtros
│   └── export.js       ← Exportação CSV/JSON/TSV/PDF
└── README.md
```

## Como usar

1. **GitHub Pages:** Faça upload para um repositório GitHub e ative Pages nas configurações.
2. **Local:** Abra `index.html` diretamente no navegador (ou use `npx serve .`).

## Funcionalidades

### Formulário (`index.html`)
- 7 idiomas: PT-BR, Español, English, Français, Deutsch, ภาษาไทย, 日本語
- 4 etapas: Identificação → Perfil → Alinhamento → Contato
- Salvamento local (localStorage)
- Detecção automática do idioma do navegador

### Dashboard (`dashboard.html`)
- Filtros: duração, país, região, busca, sello de calidad
- Gráfico de rosca: distribuição por duração
- Gráfico de barras: programas por país
- Mapa mundial interativo (Leaflet + OpenStreetMap)
- Alinhamento com Mapa Estratégico Multiply (9 focos)
- Tabela com 37 programas pré-carregados
- Sello de calidad: toggle por programa
- Exportação: CSV, JSON, TSV (Excel), PDF (imprimir)
- Modal de detalhes com exportação individual em PDF

## Edição de dados

Para editar os programas pré-carregados, edite `js/data.js` — cada programa segue o schema documentado no topo do arquivo.

Para adicionar novos programas dinamicamente, use o formulário de afiliação.

## Tecnologias

- HTML/CSS/JS vanilla (sem framework)
- [Chart.js 4.4](https://www.chartjs.org/) — gráficos
- [Leaflet 1.9](https://leafletjs.com/) — mapa interativo
- [Google Fonts: Inter](https://fonts.google.com/specimen/Inter)
- localStorage para persistência local
