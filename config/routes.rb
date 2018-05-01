Rails.application.routes.draw do
  devise_for :users
  root to: 'home#index'

  post '/send_message', to: 'home#send_message'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
