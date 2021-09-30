Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :projects, only: [:index, :create, :destroy, :update, :show]
    resources :project_teams, only: [:show, :create, :destroy]
    resources :stories, only: [:index, :show, :create, :destroy]
  end
end