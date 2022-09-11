using Rock_Paper_Scissors.Models;
using System;
using System.Collections.Generic;
using System.IO;

namespace Rock_Paper_Scissors.GameLogic
{
    public static class GameLogic
    {
        public static List<string> Options { get; set; } = new List<string> {
            "Rock", "Paper", "Scissors"
        };
        public static void SaveGameSession(string gameId, string player1name, string player2name,
            string player1Choice, string player2Choice, string result, string filePath)
        {
            var entry = $"GameId: {gameId} | Player1:  {player1name} | player1Choice: {player1Choice} | Player2:  {player2name}" +
                $" | player2Choice: {player2Choice}  | Result: {result}.\n";

            using (StreamWriter sw = File.AppendText(filePath))
            {
                sw.WriteLine(entry);
            }

        }

        public static string FindWinner(PlayerSelection player1, PlayerSelection player2)
        {

            if (player1.PlayerChoice.Equals(player2.PlayerChoice))
            {
                return "Tie";
            }
            if (player1.PlayerChoice.Equals("Rock") && player2.PlayerChoice.Equals("Paper"))
            {
                return player1.PlayerName;
            }
            if (player1.PlayerChoice.Equals("Paper") && player2.PlayerChoice.Equals("Rock"))
            {
                return player1.PlayerName;
            }
            if (player1.PlayerChoice.Equals("Scissors") && player2.PlayerChoice.Equals("Rock"))
            {
                return player1.PlayerName;
            }

            return "No winner";
        }
    }
}

