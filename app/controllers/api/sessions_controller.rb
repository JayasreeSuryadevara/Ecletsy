class Api::SessionsController < ApplicationController
  def create
    # Find user by credentials
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: ['Username/Password incorrect!'], status: 401
    else
      login(@user)
      render json: @user
    end
  end

  def destroy
    logout!
    render json: { message: 'Logout successful.' }
  end
end
