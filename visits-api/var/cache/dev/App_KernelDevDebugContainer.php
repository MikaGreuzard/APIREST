<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\Container10LZ9ny\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/Container10LZ9ny/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/Container10LZ9ny.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\Container10LZ9ny\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \Container10LZ9ny\App_KernelDevDebugContainer([
    'container.build_hash' => '10LZ9ny',
    'container.build_id' => '157ac68c',
    'container.build_time' => 1683813455,
], __DIR__.\DIRECTORY_SEPARATOR.'Container10LZ9ny');
