#  Secretária AI - Agente Virtual Inteligente

Um agente de inteligência artificial desenhado para atuar como secretária virtual, responsável pela gestão de agendamentos e automação de comunicações por e-mail.

---

## Funcionalidades Principais

### Funções de Agendamento
- **Consultar Data:** Verificar a data atual e disponibilidade específica.
- **Consultar Calendário:** Visualizar compromissos e horários livres na agenda.
- **Agendar Compromisso:** Criar novos eventos e reuniões no calendário.
- **Remarcar Compromisso:** Alterar a data ou hora de compromissos existentes.

### Funções de Comunicação
- **Consultar Caixa de Emails:** Ler e filtrar mensagens recebidas.
- **Enviar Email:** Redigir e enviar e-mails de confirmação, resposta ou notificação.

---

## Stack Tecnológica

- **Linguagem Principal:** Python 3.11+
- **Framework de IA:** LangChain / LangGraph + OpenAI API / Gemini API
- **Backend & APIs:** FastAPI / Pydantic
- **Integrações:** Google Calendar API, Gmail API (ou serviço de e-mail equivalente)
- **Persistência:** PostgreSQL / Redis

---

## Como Executar o Projeto Localmente

### 1. Clonar o Repositório

```bash
git clone [https://github.com/seu-usuario/secretaria-ai.git](https://github.com/seu-usuario/secretaria-ai.git)
cd secretaria-ai