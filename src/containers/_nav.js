import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["MANAGEMENT"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "사용자 관리",
    route: "/base",
    icon: "cil-contact",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "사용자 목록",
        to: "/base/breadcrumbs",
      },
      {
        _tag: "CSidebarNavItem",
        name: "운영진 관리",
        to: "/base/cards",
      },
      {
        _tag: "CSidebarNavItem",
        name: "SMS 설정",
        to: "/base/carousels",
      },
      {
        _tag: "CSidebarNavItem",
        name: "메일 설정",
        to: "/base/collapses",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "이미지 관리",
    to: "/images",
    icon: "cil-image",
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "쇼핑",
    route: "/buttons",
    icon: "cil-cart",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "상품 관리",
        to: "/buttons/buttons",
      },
      {
        _tag: "CSidebarNavItem",
        name: "주문 관리",
        to: "/buttons/brand-buttons",
      },
      {
        _tag: "CSidebarNavItem",
        name: "취소 관리",
        to: "/buttons/button-groups",
      },
      {
        _tag: "CSidebarNavItem",
        name: "반품 관리",
        to: "/buttons/button-dropdowns",
      },
      {
        _tag: "CSidebarNavItem",
        name: "교환 관리",
        to: "/buttons/button-dropdowns",
      },
      {
        _tag: "CSidebarNavItem",
        name: "구매평 관리",
        to: "/buttons/button-dropdowns",
      },
      {
        _tag: "CSidebarNavItem",
        name: "문의 관리",
        to: "/buttons/button-dropdowns",
      },
      {
        _tag: "CSidebarNavItem",
        name: "적립금 관리",
        to: "/buttons/button-dropdowns",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "콘텐츠 관리",
    route: "/buttons",
    icon: "cil-book",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "게시물 관리",
        to: "/buttons/buttons",
      },
      {
        _tag: "CSidebarNavItem",
        name: "댓글 관리",
        to: "/buttons/brand-buttons",
      },
      {
        _tag: "CSidebarNavItem",
        name: "입력폼 관리",
        to: "/buttons/button-groups",
      },
      {
        _tag: "CSidebarNavItem",
        name: "일정 관리",
        to: "/buttons/button-dropdowns",
      },
      {
        _tag: "CSidebarNavItem",
        name: "갤러리 관리",
        to: "/buttons/button-dropdowns",
      },
      {
        _tag: "CSidebarNavItem",
        name: "신고/차단 관리",
        to: "/buttons/button-dropdowns",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "통계",
    route: "/notifications",
    icon: "cil-chart-line",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "기간별 분석",
        to: "/notifications/alerts",
      },
      {
        _tag: "CSidebarNavItem",
        name: "매출",
        to: "/notifications/badges",
      },
      {
        _tag: "CSidebarNavItem",
        name: "컨텐츠 반응",
        to: "/notifications/modals",
      },
      {
        _tag: "CSidebarNavItem",
        name: "방문자 통계",
        to: "/notifications/toaster",
      },
      {
        _tag: "CSidebarNavItem",
        name: "유입 사이트",
        to: "/notifications/toaster",
      },
      {
        _tag: "CSidebarNavItem",
        name: "유입 검색어",
        to: "/notifications/toaster",
      },
      {
        _tag: "CSidebarNavItem",
        name: "많이 방문한 페이지",
        to: "/notifications/toaster",
      },
      {
        _tag: "CSidebarNavItem",
        name: "저장공간",
        to: "/notifications/toaster",
      },
      {
        _tag: "CSidebarNavItem",
        name: "트래픽",
        to: "/notifications/toaster",
      },
    ],
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["SETTINGS"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "기본 환경설정",
    route: "/pages",
    icon: "cil-settings",
  },
  {
    _tag: "CSidebarNavItem",
    name: "쇼핑 환경설정",
    route: "/pages",
    icon: "cil-heart",
  },
  {
    _tag: "CSidebarNavItem",
    name: "결제 환경설정",
    route: "/pages",
    icon: "cil-credit-card",
  },
  {
    _tag: "CSidebarNavItem",
    name: "가입 및 그룹 설정",
    route: "/pages",
    icon: "cil-user-plus",
  },
  {
    _tag: "CSidebarNavItem",
    name: "약관 설정",
    route: "/pages",
    icon: "cil-newspaper",
  },
  {
    _tag: "CSidebarNavItem",
    name: "팝업/배너 관리",
    route: "/pages",
    icon: "cil-window-restore",
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },
];

export default _nav;
