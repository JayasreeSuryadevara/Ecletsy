Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resource :users, only: [:create, :index]
    resources :products, only: [:index, :show]
    resources :vendors, only: [:index, :show, :create, :update] do
      resources :products, only: [:create, :update, :destroy]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
