class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      createCart(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 401
    end
  end
  
  def index
    @users = User.all
    render :index
  end

  private

  def user_params
    params.require(:user).permit( :email, :username, :password)
  end

end
