<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerBRZOURb\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerBRZOURb/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerBRZOURb.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerBRZOURb\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerBRZOURb\App_KernelDevDebugContainer([
    'container.build_hash' => 'BRZOURb',
    'container.build_id' => 'a7855eff',
    'container.build_time' => 1683275916,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerBRZOURb');