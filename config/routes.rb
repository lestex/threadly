Rails.application.routes.draw do
  resources :posts, :twits
  root 'pages#index'
end
