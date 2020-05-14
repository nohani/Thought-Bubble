Rails.application.routes.draw do

  root to: 'static_pages#root'


  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show, :index] do
      post '/follows', :to => 'follows#create'
      delete '/follows', :to => 'follows#destroy'
      collection do
<<<<<<< HEAD
        resources :follows, only: [:index]
=======
        resource :follows, only: [:index]
>>>>>>> f55d524dd73b1f5fc03b2d639537fd3698a66b79
      end
    end
    resources :posts, only: [:index, :update, :show, :destroy, :create] do
      post '/likes', :to => 'likes#create'
      delete '/likes', :to => 'likes#destroy'
      collection do 
        resources :likes, only: [:index]
      end
    end 
    resource :session, only: [:create, :destroy]
    
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
