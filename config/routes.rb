Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resource :users, only: [:create]
    # post '/search', to: 'users#search'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
