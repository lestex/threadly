Rails.application.routes.draw do
  resources :twits
  get 'jquery' => 'pages#jquery'
  get 'posts' => 'posts#index'
  get '*path' => 'pages#angular'
  
  root 'pages#angular'
end
