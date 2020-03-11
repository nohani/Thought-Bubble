Rails.application.routes.draw do

  root to: 'static_pages#root'


  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show, :index] 
    resources :posts, only: [:index, :update, :show, :destroy, :create] do
      post '/likes', :to => 'likes#create'
      delete '/likes', :to => 'likes#destroy'
    end 
    resource :session, only: [:create, :destroy]
    
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
