# AppBus OS — Frontend (Protótipo)

Plataforma operacional modular para empresas de ônibus urbano. Este repositório contém o **frontend premium navegável** com dados de ambiente de demonstração, pronto para integração com núcleo técnico real.

## Como rodar

```bash
bun install
bun run dev
```

## Estrutura

```
src/
  components/   # layout, dashboard, forms, common, ui
  lib/
    api/        # camada única de chamadas (mockApi)
    mocks/      # dados centralizados
    types/      # contratos TypeScript
    auth/       # contexto de sessão (placeholder JWT)
    nav.ts      # navegação filtrada por perfil
  routes/       # rotas TanStack file-based
  assets/       # logo oficial TopBus
```

## Onde estão os mocks

`src/lib/mocks/index.ts` — todos os dados ficam aqui, nunca dentro de componentes.

## Como trocar mocks por Integração do Sistema real

Em `src/lib/api/mockApi.ts`, cada função (`getVehicles`, `createRecord`, `uploadFile`, ...) retorna `Promise<T>`. Para usar núcleo técnico real, substitua o corpo:

```ts
export const getVehicles = (): Promise<Vehicle[]> =>
  fetch("/api/vehicles", { headers: { Authorization: `Bearer ${token}` } }).then((r) => r.json());
```

A assinatura permanece a mesma — componentes e React Query continuam funcionando.

## Tecnologias internas previstas

- NestJS + PostgreSQL
- Auth JWT (interceptor já comentado em `mockApi.ts`)
- Storage para uploads (Drive / S3)
- Inteligência Operacional: Motor de Inteligência Operacional + Modelo de Inteligência Operacional em rede interna
- Entrada Operacional Assistida → Canal de Integração → Núcleo Técnico → Dashboard

## Observações

Protótipo frontend. Não há núcleo técnico nem banco reais nesta versão.
