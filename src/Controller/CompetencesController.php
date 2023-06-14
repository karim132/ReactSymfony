<?php

namespace App\Controller;

use App\Repository\CompetencesHorsInformatiqueRepository;
use App\Repository\CompetencesRepository;
use App\Repository\ExperiencesRepository;
use App\Repository\HobbiesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CompetencesController extends AbstractController
{
    #[Route('/competences', name: 'app_competences')]
    public function index(CompetencesRepository $competencesRepository,
    CompetencesHorsInformatiqueRepository $competencesHorsInformatique,
    HobbiesRepository $hobbiesRepository,
    ExperiencesRepository $experiencesRepository
    
    ): Response
    {
        return $this->render('competences/index.html.twig', [
            'competences'=>$competencesRepository->findAll(),
            //  dd($competencesRepository),
            'competencesHorsInformatique'=>$competencesHorsInformatique->findAll(),
            'hobbies'=>$hobbiesRepository->findAll(),
            'experiences'=>$experiencesRepository->findAll(),
        ]);
    }
}
