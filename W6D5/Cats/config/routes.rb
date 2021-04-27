Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :cats

  # get 'cats', to: 'cats#index', as: 'cats'
end
