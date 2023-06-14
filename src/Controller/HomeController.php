<?php

namespace App\Controller;

use App\Repository\AccueilRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/{reactRouting}", name="home", defaults={"reactRouting": null})
     */
     #[Route('/', name: 'app_home')]
    public function index(AccueilRepository $accueilRepository): Response
    {
        return $this->render('home/index.html.twig', [
            'accueil'=>$accueilRepository->findAll(),
            // dd($accueilRepository)
        ]);
    }
}
