<?php

namespace App\Repository;

use App\Entity\CompetencesHorsInformatique;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<CompetencesHorsInformatique>
 *
 * @method CompetencesHorsInformatique|null find($id, $lockMode = null, $lockVersion = null)
 * @method CompetencesHorsInformatique|null findOneBy(array $criteria, array $orderBy = null)
 * @method CompetencesHorsInformatique[]    findAll()
 * @method CompetencesHorsInformatique[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CompetencesHorsInformatiqueRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CompetencesHorsInformatique::class);
    }

    public function save(CompetencesHorsInformatique $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(CompetencesHorsInformatique $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return CompetencesHorsInformatique[] Returns an array of CompetencesHorsInformatique objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?CompetencesHorsInformatique
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
