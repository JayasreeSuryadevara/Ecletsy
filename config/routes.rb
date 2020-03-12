Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :index]
    resources :cart_items, only: [:index, :create, :update, :destroy]
    resource :shopping_cart, only: [:show, :create, :resolve]
    resources :products, only: [:index, :show] 
    resources :vendors, only: [:index, :show, :create, :update] do
      resources :products, only: [:create, :show, :update, :destroy]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
