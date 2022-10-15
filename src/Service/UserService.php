<?php

namespace App\Service;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;

class UserService
{

    private UserRepository $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function createUser(Request $request): ?User
    {
        $data = json_decode($request->getContent(), true, 512, JSON_THROW_ON_ERROR);
        $user = new User();
        $user->setEmail($data['email']);
        $user->setFirstName($data['firstName']);
        $user->setLastName($data['lastName']);
        $this->userRepository->add($user, true);
        return $user;
    }

    /**
     * @return User[]
     */
    public function getUsers(): array
    {
        return $this->userRepository->findAll();
    }

    public function getUser(int $userId): ?User
    {
        return $this->userRepository->find($userId);
    }

    public function updateUser(int $userId, Request $request): ?User
    {
        $data = json_decode($request->getContent(), true, 512, JSON_THROW_ON_ERROR);
        $email = $data['email'] ?? null;
        $firstName = $data['firstName'] ?? null;
        $lastName = $data['lastName'] ?? null;
        $backgroundColor = $data['backgroundColor'] ?? null;
        $foregroundColor = $data['foregroundColor'] ?? null;


        $user = $this->userRepository->find($userId);
        if (!$user) {
            return null;
        }
        if ($email) {
            $user->setEmail($email);
        }
        if ($firstName) {
            $user->setFirstName($firstName);
        }
        if ($lastName) {
            $user->setLastName($lastName);
        }
        if ($backgroundColor) {
            $user->setBackgroundColor($backgroundColor);
        }
        if ($foregroundColor) {
            $user->setForegroundColor($foregroundColor);
        }
        $this->userRepository->add($user, true);
        return $user;
    }

    public function deleteUser(int $userId): bool
    {
        $user = $this->userRepository->find($userId);
        if (!$user) {
            return false;
        }
        $this->userRepository->remove($user, true);
        return true;
    }
}
