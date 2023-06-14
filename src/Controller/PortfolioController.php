<?php

namespace App\Controller;

use App\Repository\ProjetsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PortfolioController extends AbstractController
{
    #[Route('/portfolio', name: 'app_portfolio')]
    public function index(ProjetsRepository $projetsRepository): Response
    {
        return $this->render('portfolio/index.html.twig', [
            'projets' => $projetsRepository->findAll(),
        ]);
    }
}
