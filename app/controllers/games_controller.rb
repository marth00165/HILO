class GamesController < ApplicationController
  def index
    @games = Game.all
    gameRender = @games.map{|game| newGame = {id: game.id, user_id: game.user_id, guesses: game.guesses}}
    render json: gameRender, except: [:created_at, :updated_at]
  end
end
