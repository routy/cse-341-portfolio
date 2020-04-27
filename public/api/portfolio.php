<?php

$portfolio_items = [
    [
        'name' => 'Title 1',
        'description' => 'This is a description',
        'url' => '/this-is-the-url',
        'featuredImage' => 'https://via.placeholder.com/150'
    ],
    [
        'name' => 'Title 2',
        'description' => 'This is a description',
        'url' => '/this-is-the-url',
        'featuredImage' => 'https://via.placeholder.com/150'
    ],
    [
        'name' => 'Title 3',
        'description' => 'This is a description',
        'url' => '/this-is-the-url',
        'featuredImage' => 'https://via.placeholder.com/150'
    ],
    [
        'name' => 'Title 4',
        'description' => 'This is a description',
        'url' => '/this-is-the-url',
        'featuredImage' => 'https://via.placeholder.com/150'
    ]
];

echo json_encode( $portfolio_items );
exit;