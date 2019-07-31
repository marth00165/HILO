class UsersController < ApplicationController
  def index
    @users = User.all
    userRender = @users.map{|user| player = {id: user.id, nickname: user.nickname}}
    render json: userRender, except: [:created_at, :updated_at]
  end


  def show
    @user = User.find(params[:id])
    render json: @user, except: [:created_at, :updated_at]
  end

  def new
    @user = User.new(nickname: params[:nickname])
  end

  def create
    @user = User.new(nickname: params[:nickname])
    render json: @user
  end

  def destroy
    @user = User.find(params[:id])
    render json: @user, except: [:created_at, :updated_at]
    @user.destroy
  end

end
