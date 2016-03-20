Rails.application.routes.draw do
  resources :twits
  get 'jquery' => 'pages#jquery'
  get 'react' => 'pages#react'
  get '*path' => 'pages#angular'
  
  root 'pages#angular'
end
