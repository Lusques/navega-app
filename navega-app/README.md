# NavegaApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Estrutura de Pastas Angular — Projeto Escalável

## src/
```
src/
├── app/
│   ├── core/                            # Recursos globais (1x por projeto)
│   │   ├── layouts/                     # Layouts com router-outlet
│   │   │   ├── dashboard-layout/
│   │   │   │   ├── dashboard-layout.component.ts
│   │   │   │   ├── dashboard-layout.component.html
│   │   │   │   └── ...
│   │   │   └── login-layout/
│   │   │       ├── login-layout.component.ts
│   │   │       ├── login-layout.component.html
│   │   │       └── ...
│   │   ├── guards/                      # Ex: AuthGuard
│   │   ├── interceptors/                # Interceptadores globais
│   │   ├── services/                    # Serviços compartilhados
│   │   └── core.module.ts               # Importa/declara tudo acima
│
│   ├── shared/                          # Componentes reutilizáveis
│   │   ├── components/                  # Ex: Button, Card, Input
│   │   ├── directives/                  # Diretivas customizadas
│   │   ├── pipes/                       # Pipes reutilizáveis
│   │   ├── models/                      # Interfaces e types
│   │   └── shared.module.ts
│
│   ├── features/                        # Funcionalidades isoladas por domínio
│   │   ├── auth/                        # Autenticação
│   │   │   ├── pages/
│   │   │   │   └── login/               # Página de login
│   │   │   │       ├── login.component.ts
│   │   │   │       ├── login.component.html
│   │   │   │       ├── login.component.less
│   │   │   └── auth.module.ts
│   │   ├── dashboard/                   # Outro domínio
│   │   │   └── ...
│   │   └── ...
│
│   ├── app-routing.module.ts           # Rotas principais
│   └── app.component.ts                # Componente raiz
│
├── assets/                             # Arquivos estáticos
│   ├── images/                         # Imagens
│   ├── icons/                          # Ícones e SVGs
│   └── fonts/                          # Fontes externas
│
├── styles/                             # Organização dos estilos globais
│   ├── abstract/                       # Variáveis, mixins
│   │   └── _variables.less
│   ├── base/                           # Reset, tipografia, helpers
│   │   └── _reset.less
│   ├── layout/                         # Estilo dos layouts
│   ├── components/                     # Estilo de componentes
│   ├── pages/                          # Estilo específico por página
│   ├── _global.less                    # Importa todos os LESS do projeto
│   └── styles.less                     # Importado no angular.json
```