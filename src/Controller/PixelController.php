<?php

namespace App\Controller;

use App\Service\PixelService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PixelController extends ApiController
{

    private PixelService $pixelService;

    public function __construct(PixelService $pixelService)
    {
        $this->pixelService = $pixelService;
    }

    #[Route('/api/pixels', methods: ['POST'])]
    public function createInstance(Request $request): Response {
        return $this->json($this->pixelService->createPixel($request));
    }

    #[Route('/api/pixels', methods: ['GET'])]
    public function getCollection(): Response {
        return $this->json($this->pixelService->getPixels());
    }

    #[Route('/api/pixels/{pixelId}', methods: ['GET'])]
    public function getInstance(int $pixelId): Response {
        return $this->json($this->pixelService->getPixel($pixelId));
    }

    #[Route('/api/pixels/{pixelId}', methods: ['PATCH', 'PUT'])]
    public function updateInstance(int $pixelId, Request $request): Response {
        return $this->json($this->pixelService->updatePixel($pixelId, $request));
    }

    #[Route('/api/pixels/{pixelId}', methods: ['DELETE'])]
    public function deleteInstance(int $pixelId): Response {
        return $this->json($this->pixelService->deletePixel($pixelId));
    }
}
