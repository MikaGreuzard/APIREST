<?php

namespace App\Entity;

use App\Repository\VisitRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;

#[ORM\Entity(repositoryClass: VisitRepository::class)]
#[ApiResource()]
class Visit
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $firstname = null;

    #[ORM\Column(length: 255)]
    private ?string $lastname = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $entranceDate = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $leavingDate = null;

    #[ORM\ManyToOne(inversedBy: 'visits')]
    private ?Employee $encouteredPerson = null;

    #[ORM\ManyToOne(inversedBy: 'visits')]
    private ?Reason $reason = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getEntranceDate(): ?\DateTimeInterface
    {
        return $this->entranceDate;
    }

    public function setEntranceDate(\DateTimeInterface $entranceDate): self
    {
        $this->entranceDate = $entranceDate;

        return $this;
    }

    public function getLeavingDate(): ?\DateTimeInterface
    {
        return $this->leavingDate;
    }

    public function setLeavingDate(?\DateTimeInterface $leavingDate): self
    {
        $this->leavingDate = $leavingDate;

        return $this;
    }

    public function getEncouteredPerson(): ?Employee
    {
        return $this->encouteredPerson;
    }

    public function setEncouteredPerson(?Employee $encouteredPerson): self
    {
        $this->encouteredPerson = $encouteredPerson;

        return $this;
    }

    public function getReason(): ?Reason
    {
        return $this->reason;
    }

    public function setReason(?Reason $reason): self
    {
        $this->reason = $reason;

        return $this;
    }
}
