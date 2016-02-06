Rails.application.routes.draw do

  match '*all', :to => 'base#preflight', :via => [:options]

  scope '/api', :defaults => {:format => 'json'} do
    resources :entries, :only => [:index, :show, :create, :update, :destroy]
  end

  get '*path', :to => 'base#index', :constraints => {:format => 'html'}

end
