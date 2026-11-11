# Projeto Web Social – Tecnologia para Saúde, Bem-Estar e Acessibilidade

Plataforma web moderna e profissional focada na promoção da saúde, bem-estar e acessibilidade universal, com 5 seções temáticas dedicadas a diferentes públicos e múltiplos jogos interativos.

## 🎯 Objetivo

Criar uma plataforma web inclusiva e visualmente atraente que solucione necessidades reais de saúde, qualidade de vida e inclusão para públicos com demandas específicas, com foco em acessibilidade, design profissional e engajamento através de jogos educativos.

## 📋 Os 5 Pilares Temáticos

1. **👶 Saúde e Bem-Estar Infantil** - 3 jogos interativos:
   - Jogo dos Alimentos Saudáveis (quiz)
   - Jogo da Memória (encontre os pares)
   - Quiz de Higiene (sequência de perguntas)
   - Dicas de segurança e higiene
   - Segurança digital para crianças

2. **👴 Cuidados para Idosos** - Informações essenciais:
   - Dicas de saúde e bem-estar
   - Contatos de emergência
   - Prevenção de quedas
   - Rotina diária sugerida

3. **🧠 Saúde Mental** - 2 ferramentas interativas:
   - Check-in emocional com dicas personalizadas
   - Exercício de respiração guiada (jogo)
   - Técnicas de relaxamento
   - Dicas de autocuidADO
   - Recursos de ajuda profissional

4. **♿ Ferramentas de Acessibilidade** - Guia completo:
   - Tecnologias assistivas
   - Princípios WCAG
   - Atalhos de teclado
   - Ferramentas de teste
   - Melhores práticas

5. **🥗 Nutrição Saudável** - 2 jogos interativos:
   - Construtor de Refeições (crie e avalie)
   - Quiz de Nutrição (em breve)
   - Grupos alimentares
   - Hábitos saudáveis
   - Exemplos de refeições
   - Dicas de hidratação

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório ou navegue até o diretório do projeto
2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra o navegador no endereço exibido (geralmente `http://localhost:5173`)

### Build para Produção

```bash
npm run build
```

O build será gerado na pasta `dist/`.

## 🎨 Características do Projeto

### Design Profissional e Moderno

- ✅ **Gradientes e Sombras**: Design moderno com gradientes suaves e sombras elegantes
- ✅ **Animações Suaves**: Transições e animações fluidas (fade-in, slide-up)
- ✅ **Backdrop Blur**: Efeito de vidro fosco no menu e painéis
- ✅ **Cards com Hover**: Elementos interativos com efeitos de hover
- ✅ **Paleta de Cores Coesa**: Cores harmonizadas para cada seção
- ✅ **Tipografia Hierárquica**: Títulos e textos com tamanhos apropriados
- ✅ **Logo Personalizado**: Logo com gradiente e design profissional
- ✅ **Scrollbar Customizada**: Scrollbar estilizada para melhor experiência

### Acessibilidade (WCAG / A11y)

- ✅ **Alto Contraste**: Modo de alto contraste ajustável
- ✅ **Texto Grande**: Opção de ampliação de fonte
- ✅ **Redução de Movimento**: Desabilita animações para quem prefere
- ✅ **Navegação por Teclado**: Totalmente navegável por teclado
- ✅ **Skip Link**: Link para pular para o conteúdo principal
- ✅ **ARIA Labels**: Rótulos para leitores de tela
- ✅ **HTML Semântico**: Estrutura acessível do conteúdo
- ✅ **Focus Visible**: Indicadores visuais de foco

### Design e UX/UI

- ✅ **Menu Intuitivo**: Navegação clara entre seções com ícones
- ✅ **Design Adaptativo**: Interfaces ajustadas a cada público
- ✅ **Cores Vibrantes**: Para seção infantil
- ✅ **Tipografia Ampliada**: Para seção de idosos
- ✅ **Layout Responsivo**: Adaptação a diferentes dispositivos
- ✅ **Ícones Descritivos**: Emojis e ícones com significado claro
- ✅ **Botões com Gradientes**: Botões modernos com gradientes e hover effects

### Jogos Interativos (7 jogos no total)

- ✅ **Jogo dos Alimentos** (Infantil): Quiz sobre alimentos saudáveis
- ✅ **Jogo da Memória** (Infantil): Encontre os pares de alimentos
- ✅ **Quiz de Higiene** (Infantil): Sequência de perguntas sobre higiene
- ✅ **Exercício de Respiração** (Saúde Mental): Respiração guiada visual
- ✅ **Construtor de Refeições** (Nutrição): Crie e avalie refeições
- ✅ **Check-in Emocional** (Saúde Mental): Selecione humor e receba dicas
- ✅ **Quiz de Nutrição** (Nutrição): Em breve

### Criatividade e Conteúdo

- ✅ **Múltiplos Jogos**: 7 jogos interativos diferentes
- ✅ **Check-in Emocional**: Ferramenta interativa de saúde mental
- ✅ **Conteúdo Educativo**: Informações práticas e aplicáveis
- ✅ **Dicas Personalizadas**: Recomendações baseadas no humor
- ✅ **Exemplos Práticos**: Refeições, rotinas, exercícios

## 📁 Estrutura do Projeto

```
src/
├── main.jsx                 # Ponto de entrada
├── App.jsx                  # Componente principal
├── index.css                # Estilos globais
├── context/
│   └── AccessibilityContext.jsx  # Contexto de acessibilidade
├── components/
│   ├── Navigation.jsx       # Menu de navegação
│   └── AccessibilityPanel.jsx  # Painel de acessibilidade
└── pages/
    ├── ChildHealth.jsx      # Saúde Infantil
    ├── ElderlyCare.jsx      # Cuidados Idosos
    ├── MentalHealth.jsx     # Saúde Mental
    ├── AccessibilityTools.jsx # Ferramentas de Acessibilidade
    └── Nutrition.jsx        # Nutrição
```

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript
- **Vite** - Build tool e servidor de desenvolvimento
- **TailwindCSS** - Framework CSS
- **Lucide React** - Ícones

## 📊 Critérios de Avaliação

### Cobertura dos 5 Temas (30%)
✅ Todas as 5 seções temáticas implementadas:
- Saúde e Bem-Estar Infantil
- Cuidados para Idosos
- Saúde Mental
- Ferramentas de Acessibilidade
- Nutrição Saudável

### Acessibilidade Web (A11y) (25%)
✅ Recursos implementados:
- Alto contraste ajustável
- Fontes legíveis e ampliáveis
- Textos alternativos em imagens
- Suporte a atalhos de navegação
- HTML semântico
- ARIA labels
- Navegação por teclado completa

### Design e Experiência do Usuário (UX/UI) (25%)
✅ Características:
- Navegação simples e intuitiva
- Organização visual clara
- Design adaptativo a cada público
- Layout responsivo
- Cores e tipografia adequadas

### Criatividade e Qualidade do Conteúdo (20%)
✅ Elementos criativos:
- Jogo educativo interativo
- Check-in emocional com dicas personalizadas
- Conteúdo original e prático
- Ferramentas integradas ao site

## 🎤 Apresentação para a Turma

### Estrutura Sugerida (10 minutos)

1. **Introdução (1 minuto)**
   - Apresentação do projeto e objetivo
   - Explicação dos 5 pilares temáticos

2. **Demonstração (5 minutos)**
   - Navegação pelas 5 seções
   - Demonstração do jogo infantil
   - Demonstração do check-in emocional
   - Demonstração das ferramentas de acessibilidade

3. **Destaque de Acessibilidade (2 minutos)**
   - Mostrar alto contraste
   - Mostrar texto grande
   - Navegação por teclado

4. **Conclusão (2 minutos)**
   - Resumo dos benefícios
   - Impacto na inclusão digital
   - Próximos passos

### Slides de Apresentação (Canvas)

Sugestão de slides:
1. Título e Objetivo
2. Os 5 Pilares Temáticos
3. Arquitetura do Site
4. Demonstração: Saúde Infantil
5. Demonstração: Acessibilidade
6. Recursos de Acessibilidade Implementados
7. Impacto e Benefícios
8. Conclusão

## 🔧 Personalização

### Adicionar Novas Seções

1. Crie um novo componente em `src/pages/`
2. Adicione a seção ao array `sections` em `src/App.jsx`
3. O menu será atualizado automaticamente

### Modificar Cores

Edite `tailwind.config.js` para adicionar ou modificar cores personalizadas.

### Adicionar Novas Funcionalidades de Acessibilidade

1. Adicione o estado ao `AccessibilityContext`
2. Crie o controle no `AccessibilityPanel`
3. Aplique os estilos em `index.css` ou nos componentes

## 📝 Notas Importantes

- O projeto é totalmente responsivo e funciona em desktop, tablet e mobile
- Todas as imagens usam emojis que são acessíveis por leitores de tela
- O código segue boas práticas de React e acessibilidade
- O projeto está pronto para ser deployado em qualquer plataforma de hosting estático (Vercel, Netlify, GitHub Pages)

## 🤝 Contribuições

Este é um projeto acadêmico focado em inclusão digital e acessibilidade. Sinta-se à vontade para adaptar e expandir conforme necessário.

## 📞 Suporte

Para dúvidas ou problemas, consulte a documentação do React, Vite e TailwindCSS.

---

**Desenvolvido com foco em inclusão, acessibilidade e bem-estar para todos.** ♿
