Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "welcome#home"
  get "/home" => "welcome#home"
  get "/about" => "welcome#about"
  get "/contact_us" => "welcome#contact_us"
  get "/thank_you" => "welcome#thank_you"
  get "/new" => "bills#new"
  match(
    "/delayed_job",
    to: DelayedJobWeb,
    anchor: false,
    via: [:get, :post],
  )
  namespace :admin do
    resources :dashboard, only: [:index]
  end
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :show]
  resources :tags, only: [:index, :show]
  resources :products do
    resources :reviews, only: [:create, :destroy] do
      resources :likes, shallow: true, only: [:create, :destroy]
      resources :votes, only: [:create, :update, :destroy]
    end
    resources :favourites, shallow: true, only: [:create, :destroy]
  end
  resources :news_articles
end
