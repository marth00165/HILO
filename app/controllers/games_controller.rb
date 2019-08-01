class GamesController < ApplicationController
  def index
    @games = Game.all
    gameRender = @games.map{|game| newGame = {id: game.id, user_id: game.user_id, guesses: game.guesses}}
    render json: gameRender, except: [:created_at, :updated_at]
  end

  def show
    @game = Game.find(params[:id])
    render json: @game, include: [:user]
  end

  def new
    @game = Game.new(params.require(:game).permit(:user_id, :guesses))
  end

  def create

    @user = User.find_or_create_by(params[:game][:nickname])
    user_id = @user.id
    @game = Game.new(params.require(:game).permit(:guesses), user_id: user_id)
    if @game.save
      @user = User.find(params[:game][:nickname])
      render json: @game, include: [:user]
    end
  end
end
