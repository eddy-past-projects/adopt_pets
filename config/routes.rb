Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users
  resources :pets
  resources :toys


  patch '/toggle_hunger/:id', to: 'pets#pet_hungry', as: 'pet_hungry'


  root 'pets#index'


  get '/login', to: 'sessions#new', as: 'login'
  post '/login', to: 'sessions#create'
  delete '/login', to: 'sessions#delete', as: 'logout'


end
