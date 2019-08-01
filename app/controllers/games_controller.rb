class GamesController < ApplicationController
  def index
    @games = Game.all
    gameRender = @games.map{|game| newGame = {id: game.id, user_id: game.user_id, guesses: game.guesses}}
    render json: gameRender, except: [:created_at, :updated_at]
  end

  def show
    @game = Game.find(params[:id])
    render json: @game, except: [:created_at, :updated_at]
  end

  def new
    @game = Game.new(params.require(:game).permit(:user_id, :guesses))
  end

  def create
    @game = Game.new(params.require(:game).permit(:user_id, :guesses))
    if @game.save
      @user = User.find(params[:game][:user_id])
      render json: @game, except: [:created_at, :updated_at]
    end
  end
end
