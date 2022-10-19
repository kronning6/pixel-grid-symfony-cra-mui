<?php

namespace App\Service;

use App\Entity\Pixel;
use App\Repository\PixelRepository;
use Symfony\Component\HttpFoundation\Request;

class PixelService
{

    private PixelRepository $pixelRepository;

    public function __construct(PixelRepository $pixelRepository)
    {
        $this->pixelRepository = $pixelRepository;
    }

    public function createPixel(Request $request): ?Pixel
    {
        $data = json_decode($request->getContent(), true, 512, JSON_THROW_ON_ERROR);
        $pixel = new Pixel();
        $pixel->setX((int) $data['x']);
        $pixel->setY((int) $data['y']);
        $pixel->setAvailable(true);
        $this->pixelRepository->add($pixel, true);
        return $pixel;
    }

    /**
     * @return Pixel[]
     */
    public function getPixels(): array
    {
        return $this->pixelRepository->findAll();
    }

    public function getPixel(int $pixelId): ?Pixel
    {
        return $this->pixelRepository->find($pixelId);
    }

    public function updatePixel(int $pixelId, Request $request): ?Pixel
    {
        $data = json_decode($request->getContent(), true, 512, JSON_THROW_ON_ERROR);
        $x = $data['x'] ?? null;
        $y = $data['y'] ?? null;
        $available = $data['available'] ?? null;
        $userId = $data['userId'] ?? null;

        $pixel = $this->pixelRepository->find($pixelId);
        if (!$pixel) {
            return null;
        }
        if ($x) {
            $pixel->setX((int) $x);
        }
        if ($y) {
            $pixel->setY((int) $y);
        }
        if ($available) {
            $pixel->setAvailable((bool) $available);
        }
        if ($userId) {
            $pixel->setUserId((int) $userId);
        } else {
            $pixel->setUserId(null);
        }
        $this->pixelRepository->add($pixel, true);
        return $pixel;
    }

    public function deletePixel(int $pixelId): bool
    {
        $pixel = $this->pixelRepository->find($pixelId);
        if (!$pixel) {
            return false;
        }
        $this->pixelRepository->remove($pixel, true);
        return true;
    }
}
