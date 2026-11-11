# Mapa da Arquitetura do Site

## Estrutura Hierárquica do Projeto

```
Saúde e Bem-Estar Infantil/
├── index.html                    # Página HTML principal
├── package.json                  # Dependências do projeto
├── vite.config.js               # Configuração do Vite
├── tailwind.config.js           # Configuração do TailwindCSS
├── postcss.config.js            # Configuração do PostCSS
├── ARQUITETURA.md               # Este arquivo
├── README.md                    # Documentação do projeto
└── src/
    ├── main.jsx                 # Ponto de entrada da aplicação
    ├── App.jsx                  # Componente principal
    ├── index.css                # Estilos globais e acessibilidade
    ├── context/
    │   └── AccessibilityContext.jsx  # Contexto de acessibilidade global
    ├── components/
    │   ├── Navigation.jsx       # Menu de navegação acessível
    │   └── AccessibilityPanel.jsx  # Painel de controle de acessibilidade
    └── pages/
        ├── ChildHealth.jsx      # Página: Saúde e Bem-Estar Infantil
        ├── ElderlyCare.jsx      # Página: Cuidados para Idosos
        ├── MentalHealth.jsx     # Página: Saúde Mental
        ├── AccessibilityTools.jsx # Página: Ferramentas de Acessibilidade
        └── Nutrition.jsx        # Página: Nutrição Saudável
```

## Arquitetura de Navegação

### Menu Principal (Navegação)
O menu principal permite alternar entre as 5 seções temáticas:

1. **👶 Saúde Infantil** - Conteúdos interativos para crianças
2. **👴 Cuidados Idosos** - Informações para a terceira idade
3. **🧠 Saúde Mental** - Recursos de bem-estar emocional
4. **♿ Acessibilidade** - Ferramentas e guias de inclusão digital
5. **🥗 Nutrição** - Guia de alimentação saudável

### Estrutura de Cada Seção

#### 1. Saúde e Bem-Estar Infantil
- **Jogo Interativo**: Quiz de alimentos saudáveis
- **Dicas de Segurança**: Higiene, exercícios, sono
- **Segurança Digital**: Orientações para uso seguro da internet

#### 2. Cuidados para Idosos
- **Dicas de Saúde**: Medicamentos, exercícios, saúde cognitiva
- **Contatos de Emergência**: SAMU, Bombeiros, Polícia
- **Rotina Diária**: Sugestões de horários e atividades
- **Prevenção de Quedas**: Dicas de segurança em casa

#### 3. Saúde Mental
- **Check-in Emocional**: Seleção de humor com dicas personalizadas
- **Técnicas de Relaxamento**: Respiração, meditação, grounding
- **Autocuidado**: Dicas para corpo, mente e emoções
- **Recursos de Ajuda**: Quando buscar ajuda profissional

#### 4. Ferramentas de Acessibilidade
- **Tecnologias Assistivas**: Leitores de tela, lupas, teclado virtual
- **Princípios WCAG**: Perceptível, Operável, Compreensível, Robusto
- **Atalhos de Teclado**: Navegação por teclado
- **Ferramentas de Teste**: Validadores e verificadores

#### 5. Nutrição Saudável
- **Grupos Alimentares**: Carboidratos, proteínas, vegetais, frutas
- **Hábitos Saudáveis**: Hidratação, porções, variedade
- **Exemplos de Refeições**: Café da manhã, almoço, jantar, lanches
- **Dicas Práticas**: Supermercado, cozinha, hidratação

## Componentes de Acessibilidade

### Painel de Acessibilidade
Localizado abaixo do menu principal, permite:
- **Alto Contraste**: Alterna entre modo normal e alto contraste
- **Texto Grande**: Aumenta o tamanho da fonte
- **Reduzir Movimento**: Desabilita animações

### Navegação por Teclado
- **Skip Link**: Link para pular para o conteúdo principal
- **Tab Navigation**: Navegação estrutural por teclado
- **ARIA Labels**: Rótulos para leitores de tela
- **Focus Visible**: Indicadores visuais de foco

### Design Adaptativo
- **Cores Vibrantes**: Para seção infantil (amarelo/laranja)
- **Tipografia Ampliada**: Para seção de idosos
- **Alto Contraste**: Opção disponível globalmente
- **Layout Responsivo**: Adaptação a diferentes tamanhos de tela

## Tecnologias Utilizadas

### Frontend
- **React 18**: Biblioteca JavaScript para interface
- **Vite**: Build tool e servidor de desenvolvimento
- **TailwindCSS**: Framework CSS para estilização
- **Lucide React**: Ícones para interface

### Acessibilidade
- **WCAG 2.1**: Diretrizes de acessibilidade web
- **ARIA**: Atributos para tecnologias assistivas
- **HTML Semântico**: Estrutura acessível do conteúdo
- **CSS Focus Management**: Indicadores de foco visíveis

## Fluxo de Dados

### Contexto de Acessibilidade
O `AccessibilityContext` gerencia o estado global:
- `highContrast`: Boolean - modo alto contraste
- `largeText`: Boolean - texto ampliado
- `reducedMotion`: Boolean - redução de movimento

Funções disponíveis:
- `toggleHighContrast()`: Alterna alto contraste
- `toggleLargeText()`: Alterna texto grande
- `toggleReducedMotion()`: Alterna redução de movimento

### Navegação
O componente `App` gerencia:
- `activeSection`: String - seção atual ativa
- `onSectionChange`: Função - altera seção ativa

## Responsividade

### Breakpoints
- **Mobile**: < 768px (menu hamburger)
- **Tablet**: 768px - 1024px (grid 2 colunas)
- **Desktop**: > 1024px (grid 3-4 colunas)

### Adaptação por Público
- **Crianças**: Cores vibrantes, elementos grandes, interativos
- **Idosos**: Tipografia ampliada, alto contraste, layout simplificado
- **Geral**: Design limpo, navegação intuitiva, acessível

## Performance

### Otimizações
- **Code Splitting**: Carregamento sob demanda de componentes
- **Lazy Loading**: Carregamento de imagens e componentes
- **CSS Optimized**: TailwindCSS com purging
- **Fast Refresh**: Hot module replacement no desenvolvimento

## Segurança

### Boas Práticas
- **No eval()**: Evita execução de código malicioso
- **Sanitized Input**: Validação de entradas do usuário
- **HTTPS**: Recomendado para produção
- **Content Security Policy**: Política de segurança de conteúdo

## Manutenibilidade

### Padrões de Código
- **Componentização**: Componentes reutilizáveis
- **Separação de Concerns**: Lógica separada da apresentação
- **Nomenclatura Clara**: Nomes descritivos de variáveis e funções
- **Comentários**: Documentação de código complexo

### Escalabilidade
- **Modularidade**: Cada seção é um componente independente
- **Context API**: Estado global compartilhado
- **Tailwind Config**: Customização centralizada de estilos
- **Component Library**: Potencial para criar biblioteca de componentes
