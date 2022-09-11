using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Rock_Paper_Scissors.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Rock_Paper_Scissors.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IWebHostEnvironment environment;
        private readonly string _filePath;

        public HomeController(ILogger<HomeController> logger, IWebHostEnvironment environment)
        {
            _logger = logger;
            this.environment = environment;
            _filePath = this.environment.WebRootPath + "\\backend\\backendfile.txt";

        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult PersonVsPC()
        {
            return View();
        }

        public IActionResult PersonVsPC2(string player1Choice, string player2Choice, string winner)
        {
            var alpabhet = new string[] { "A", "B","X", "Z", "H"};
            var rn = new Random();
            var gameId = $"{alpabhet[rn.Next(0,4)]}{alpabhet[rn.Next(0, 4)]}{alpabhet[rn.Next(0, 4)]}{alpabhet[rn.Next(0, 4)]}{alpabhet[rn.Next(0, 4)]}";
            GameLogic.GameLogic.SaveGameSession(gameId, "Person", "PC", player1Choice, player2Choice, winner, _filePath);
            return View("Results");
        }

        public IActionResult PCvsPC()
        {
            return View();
        }

        [HttpPost]
        public IActionResult SubmitPCvsPC(string player1Choice, string player2Choice, string winner)
        {
            var alpabhet = new string[] { "A", "B", "X", "Z", "H" };
            var rn = new Random();
            var gameId = $"{alpabhet[rn.Next(0, 4)]}{alpabhet[rn.Next(0, 4)]}{alpabhet[rn.Next(0, 4)]}{alpabhet[rn.Next(0, 4)]}{alpabhet[rn.Next(0, 4)]}";
            GameLogic.GameLogic.SaveGameSession(gameId, "Computer1", "Computer2", player1Choice, player2Choice, winner, _filePath);
            return View("Results");
        }


        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
