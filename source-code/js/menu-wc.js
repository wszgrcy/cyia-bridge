'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ngx-bridge documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AntdDemoComponent.html" data-type="entity-link" >AntdDemoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BoxComponent.html" data-type="entity-link" >BoxComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BoxComponent-1.html" data-type="entity-link" >BoxComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CustomLayoutComponent.html" data-type="entity-link" >CustomLayoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CustomNode2Component.html" data-type="entity-link" >CustomNode2Component</a>
                            </li>
                            <li class="link">
                                <a href="components/CustomNodeComponent.html" data-type="entity-link" >CustomNodeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CustomNodeExamplesComponent.html" data-type="entity-link" >CustomNodeExamplesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CustomTitleComponent.html" data-type="entity-link" >CustomTitleComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DustbinComponent.html" data-type="entity-link" >DustbinComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DustbinComponent-1.html" data-type="entity-link" >DustbinComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ExcalidrawDemoComponent.html" data-type="entity-link" >ExcalidrawDemoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HelloComponent.html" data-type="entity-link" >HelloComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MenubarComponent.html" data-type="entity-link" >MenubarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NgAComponent.html" data-type="entity-link" >NgAComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PdfDemoComponent.html" data-type="entity-link" >PdfDemoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReactDndDemoComponent.html" data-type="entity-link" >ReactDndDemoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReactDndDemoComponent2.html" data-type="entity-link" >ReactDndDemoComponent2</a>
                            </li>
                            <li class="link">
                                <a href="components/ReactDndDemoComponent3.html" data-type="entity-link" >ReactDndDemoComponent3</a>
                            </li>
                            <li class="link">
                                <a href="components/ReactHookFormDemoComponent.html" data-type="entity-link" >ReactHookFormDemoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReactIconDemoComponent.html" data-type="entity-link" >ReactIconDemoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReactSpinnersDemoComponent.html" data-type="entity-link" >ReactSpinnersDemoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RichTextComponent.html" data-type="entity-link" >RichTextComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TipTapDemoComponent.html" data-type="entity-link" >TipTapDemoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TipTapHelloComponent.html" data-type="entity-link" >TipTapHelloComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ToastComponent.html" data-type="entity-link" >ToastComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#directives-links"' :
                                'data-bs-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/InputDirective.html" data-type="entity-link" >InputDirective</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/BoxProps.html" data-type="entity-link" >BoxProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BoxProps-1.html" data-type="entity-link" >BoxProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DropResult.html" data-type="entity-link" >DropResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DropResult-1.html" data-type="entity-link" >DropResult</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#pipes-links"' :
                                'data-bs-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/PurePipe.html" data-type="entity-link" >PurePipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});