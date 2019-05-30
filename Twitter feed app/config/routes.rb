Rails.application.routes.draw do
  resources :websites
  resources :dans
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root 'dans#index'
end
