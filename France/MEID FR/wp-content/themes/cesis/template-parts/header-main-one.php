<?php
/**
 * Template part for displaying header main area.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Cesis
 */

global $cesis_data;
global $cesis_post;

$header_social_content = $header_search_content = $header_cart_content = $header_notifications_content = $additional_adjust = $header_add_btn_content = "";
$page_custom_menu = redux_post_meta( 'cesis_data', get_the_ID(), 'cesis_meta_header_menu');
$custom_header = redux_post_meta( 'cesis_data', get_the_ID(), 'cesis_meta_custom_header');

if($custom_header == 'yes'  && !is_archive()){
  $logo_pos = redux_post_meta( 'cesis_data', get_the_ID(), 'cesis_meta_logo_pos');
  $menu_pos = redux_post_meta( 'cesis_data', get_the_ID(), 'cesis_meta_menu_pos');
  $menu_type = redux_post_meta( 'cesis_data', get_the_ID(), 'cesis_meta_menu_type');
  if($menu_type == 'nav_bottom_borderx' || $menu_type == 'nav_top_borderx' ){
    $menu_border_pos = redux_post_meta( 'cesis_data', get_the_ID(), 'cesis_meta_menu_border_pos');
  }else{
    $menu_border_pos = '';
  }
  $header_additional_style = redux_post_meta( 'cesis_data', get_the_ID(), 'cesis_meta_header_additional_style');
  $header_social = redux_post_meta( 'cesis_data', get_the_ID(), 'cesis_meta_header_additional_social');
  $header_search = redux_post_meta( 'cesis_data', get_the_ID(), 'cesis_meta_header_additional_search');
  $header_cart = redux_post_meta( 'cesis_data', get_the_ID(), 'cesis_meta_header_additional_cart');
  $header_notifications = redux_post_meta( 'cesis_data', get_the_ID(), 'cesis_meta_header_additional_buddypress');
  $type = redux_post_meta( 'cesis_data', get_the_ID(), 'cesis_meta_header_additional_type');
  $header_add_btn = redux_post_meta( 'cesis_data', get_the_ID(), 'cesis_meta_header_additional_btn');
  $header_add_btn_text = redux_post_meta( 'cesis_data', get_the_ID(), 'cesis_meta_header_a_btn_text');
  $header_add_btn_link = redux_post_meta( 'cesis_data', get_the_ID(), 'cesis_meta_header_a_btn_link');
  $header_add_btn_target = redux_post_meta( 'cesis_data', get_the_ID(), 'cesis_meta_header_a_btn_target');
}else{
  $logo_pos = $cesis_data["cesis_logo_pos"];
  $menu_pos = $cesis_data["cesis_menu_pos"];
  $menu_type = $cesis_data["cesis_menu_type"];
  if($menu_type == 'nav_bottom_borderx' || $menu_type == 'nav_top_borderx' ){
    $menu_border_pos = $cesis_data["cesis_menu_border_pos"];
  }else{
    $menu_border_pos = '';
  }
  $header_additional_style = $cesis_data["cesis_header_additional_style"];
  $header_social = $cesis_data["cesis_header_additional_social"];
  $header_search = $cesis_data["cesis_header_additional_search"];
  $header_cart = $cesis_data["cesis_header_additional_cart"];
  $header_notifications = $cesis_data["cesis_header_additional_buddypress"];
  $type = $cesis_data["cesis_header_additional_type"];
  $header_add_btn = $cesis_data["cesis_header_additional_btn"];
  $header_add_btn_text = $cesis_data["cesis_header_a_btn_text"];
  $header_add_btn_link = $cesis_data["cesis_header_a_btn_link"];
  $header_add_btn_target = $cesis_data["cesis_header_a_btn_target"];
}
if($menu_pos == 'menu_fill'){
  $additional_adjust = 'menu_fill ';
}
if($header_social == 'yes'){
  $header_social_content = cesis_socials($type);
}

if($header_search == 'yes'){
  $header_search_content = cesis_search($type);
}
if($header_cart == 'yes'){
  $header_cart_content = cesis_cart($type);
}
if($header_add_btn == 'yes'){
  $header_add_btn_content = '<span class="cesis_menu_btn"><a href="'.$header_add_btn_link.'" target="'.$header_add_btn_target.'"><span>'.$header_add_btn_text.'</span></a></span>';
}
if($header_notifications == 'yes' && cesis_check_bp_status() == true){
  $header_notifications_content = cesis_bp_notifications('i',$type);
}

?>
<div class="header_main">
  <div class="cesis_container">
    <div class="header_logo <?php echo esc_attr($logo_pos); ?>">
      <?php echo cesis_generate_logo(); ?>
    </div>
    <!-- .header_logo -->

    <?php if($header_social !== 'no' || $header_search !== 'no' || $header_cart !== 'no' || $header_notifications !== 'no'|| $header_add_btn !== 'no' ){
      if($logo_pos == 'logo_center'){?>
      <div class="tt-header-additional tt-main-additional <?php echo esc_attr($header_additional_style.' '.$logo_pos.' '.$menu_type.' '.$menu_border_pos.' '.$additional_adjust); ?>"><div class="tt-left-additional"><?php echo $header_social_content; ?></div><div class="tt-right-additional"><?php echo $header_search_content.''.$header_notifications_content.''.$header_cart_content.''.$header_add_btn_content;?></div></div>
    <?php }else{ ?>
      <div class="tt-header-additional tt-main-additional <?php echo esc_attr($header_additional_style.' '.$logo_pos.' '.$menu_type.' '.$menu_border_pos.' '.$additional_adjust); ?>"><?php echo $header_social_content.''.$header_search_content.''.$header_notifications_content.''.$header_cart_content.''.$header_add_btn_content;?></div>
    <?php }
    } ?>
    <!-- .tt-main-additional -->

    <nav id="site-navigation" class="tt-main-navigation <?php echo esc_attr($logo_pos.' '.$menu_pos.' '.$menu_type.' '.$menu_border_pos); ?>">
      <?php wp_nav_menu( array( 'theme_location' => 'main-menu', 'menu' => $page_custom_menu, 'container_class' => 'menu-main-ct' , 'menu_id' => 'main-menu', 'menu_class' => 'main-menu sm smart_menu', 'fallback_cb' => 'please_set_menu', 'walker' => new cesis_megamenu_walker ) ); ?>
    </nav>
    <!-- #site-navigation -->

  </div>
  <!-- .cesis_container -->
</div>
<!-- .header_main -->
