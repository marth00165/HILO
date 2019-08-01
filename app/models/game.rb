class Game < ApplicationRecord
  belongs_to :user

  def getRank(game_id)
    currentGame = Game.find(game_id)
    gameList = Game.all.sort_by{|game| game.guesses}.reverse
    game = gameList.find(currentGame)
    gameIndex = gameList.index(game)
    return {gameIndex: (gameIndex+1), totalGames: Game.all.length}
  end

end
